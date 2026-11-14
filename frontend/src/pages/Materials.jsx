import { useState } from 'react';
import { initialMaterials, CATEGORIES } from '../data/materials';
import MaterialCard from '../components/MaterialCard';
import UploadForm from '../components/UploadForm';

const TABS = ['Materials', 'Recordings', 'Assignments', 'Reminders'];
const chip = (on) =>
  `rounded-lg border px-3 py-1.5 text-sm font-medium ${on ? 'border-teal-600 bg-teal-600 text-white' : 'border-stone-300 bg-white text-stone-700'}`;

export default function Materials() {
  const [materials, setMaterials] = useState(initialMaterials);
  const [filter, setFilter] = useState('All');
  const [showUpload, setShowUpload] = useState(false);
  const [toast, setToast] = useState('');

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 2200);
  }
  const markViewed = (id) => setMaterials((ms) => ms.map((m) => (m.id === id ? { ...m, isNew: false } : m)));
  const visible = materials.filter((m) => filter === 'All' || m.category === filter);
  const newCount = materials.filter((m) => m.isNew).length;

  return (
    <main className="mx-auto max-w-3xl px-4 pb-16 pt-4 text-stone-900">
      <div role="tablist" className="mb-4 grid grid-cols-4 gap-1 rounded-xl bg-stone-100 p-1">
        {TABS.map((t, i) => (
          <button key={t} role="tab" aria-selected={i === 0} disabled={i !== 0}
            className={`rounded-lg py-2 text-xs font-semibold sm:text-sm ${i === 0 ? 'bg-white text-teal-700 shadow-sm' : 'text-stone-400'}`}>
            {t}{i === 0 && newCount > 0 && <span className="ml-1.5 rounded-full bg-teal-600 px-1.5 text-[11px] text-white">{newCount}</span>}
          </button>
        ))}
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h1 className="font-serif text-xl font-bold">Learning materials</h1>
        <button type="button" onClick={() => setShowUpload((s) => !s)} aria-expanded={showUpload}
          className="rounded-lg bg-teal-600 px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-teal-700">
          {showUpload ? 'Close' : 'Upload'}
        </button>
      </div>

      {showUpload && (
        <UploadForm onUpload={(m) => { setMaterials([m, ...materials]); setFilter('All'); setShowUpload(false); showToast('Material uploaded'); }} />
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {['All', ...CATEGORIES].map((c) => (
          <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className={chip(filter === c)}>{c}</button>
        ))}
      </div>

      {visible.length ? (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {visible.map((m) => (
            <MaterialCard key={m.id} material={m} onMarkViewed={markViewed}
              onOpen={() => showToast(m.kind === 'link' ? 'Opening link…' : 'Opening file…')} />
          ))}
        </div>
      ) : (
        <p className="py-6 text-stone-500">No materials in this category yet. Upload one above.</p>
      )}

      <div role="status"
        className={`pointer-events-none fixed bottom-5 left-1/2 -translate-x-1/2 rounded-lg bg-stone-900 px-4 py-2.5 text-white transition-opacity ${toast ? 'opacity-100' : 'opacity-0'}`}>
        {toast}
      </div>
    </main>
  );
}
