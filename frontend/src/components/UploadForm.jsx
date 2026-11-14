import { useRef, useState } from 'react';
import { CATEGORIES } from '../data/materials';

const MAX_BYTES = 10 * 1024 * 1024;
const OK_EXT = ['pdf', 'mp4', 'pptx', 'docx', 'txt'];
const fmtSize = (b) => (b > 1048576 ? `${(b / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(b / 1024))} KB`);

const field =
  'w-full rounded-lg border border-stone-300 bg-white p-2.5 text-stone-900 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-yellow-500';

export default function UploadForm({ onUpload }) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  function pick(f) {
    setError('');
    if (!f) return;
    const ext = f.name.split('.').pop().toLowerCase();
    if (!OK_EXT.includes(ext)) { setFile(null); return setError('That file type isn’t supported. Choose a PDF, MP4, PPTX, DOCX or TXT file.'); }
    if (f.size > MAX_BYTES) { setFile(null); return setError('That file is over 10 MB. Choose a smaller file.'); }
    setFile(f);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return setError('Add a title for this material.');
    if (!description.trim()) return setError('Add a short description.');
    if (!file) return setError('Choose a file to upload.');
    onUpload({
      id: Date.now(), title: title.trim(), category: type, kind: 'file', isNew: true, description: description.trim(),
    });
    setTitle(''); setDescription(''); setType(CATEGORIES[0]); setFile(null); setError('');
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mb-8 rounded-xl border border-stone-300 bg-white p-5">
      <h2 className="mb-3 font-serif text-xl font-bold">Upload a material</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-semibold">Title</label>
          <input id="title" className={field} maxLength={80} value={title}
            onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Fractions worksheet" />
        </div>
        <div>
          <label htmlFor="type" className="mb-1 block text-sm font-semibold">Category</label>
          <select id="type" className={field} value={type} onChange={(e) => setType(e.target.value)}>
            {CATEGORIES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="desc" className="mb-1 block text-sm font-semibold">Description</label>
          <textarea id="desc" className={`${field} min-h-24 resize-y`} maxLength={240} value={description}
            onChange={(e) => setDescription(e.target.value)} placeholder="What will learners get from this?" />
        </div>
        <div className="md:col-span-2">
          <div
            role="button" tabIndex={0} aria-label="Choose a file to upload"
            onClick={() => inputRef.current.click()}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inputRef.current.click(); } }}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => { e.preventDefault(); setDragging(false); pick(e.dataTransfer.files[0]); }}
            className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center text-stone-500 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-yellow-500 ${dragging ? 'border-teal-600 bg-teal-50' : 'border-stone-300'}`}
          >
            <strong className="text-stone-900">
              {file ? `${file.name} (${fmtSize(file.size)})` : 'Drag a file here or click to choose'}
            </strong>
            <div className="mt-1 text-sm">PDF, MP4, PPTX, DOCX or TXT. Max 10 MB.</div>
          </div>
          <input ref={inputRef} type="file" hidden accept=".pdf,.mp4,.pptx,.docx,.txt" onChange={(e) => pick(e.target.files[0])} />
          <p role="alert" className="mt-2 min-h-5 text-sm text-red-700">{error}</p>
        </div>
      </div>
      <button type="submit"
        className="mt-2 rounded-lg bg-teal-600 px-5 py-2.5 font-semibold text-white hover:bg-teal-700 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
        Upload material
      </button>
    </form>
  );
}
