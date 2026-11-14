import EmptyState from './shared/EmptyState';
import Modal from './shared/Modal';
import SearchBar from './shared/SearchBar';
import StatCard from './shared/StatCard';
import PageHeader from './shared/PageHeader';
import { useMemo, useState } from 'react';

const demoMaterials = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    category: 'Web Development',
    type: 'Video',
    description: 'An introduction to the fundamentals of building websites.',
    date: 'November 10, 2026',
  },
  {
    id: 2,
    title: 'HTML and CSS Beginners Guide',
    category: 'Web Development',
    type: 'Document',
    description: 'Learn the building blocks of modern web pages.',
    date: 'November 11, 2026',
  },
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    category: 'Programming',
    type: 'Video',
    description: 'Understand variables, functions and basic JavaScript.',
    date: 'November 12, 2026',
  },
  {
    id: 4,
    title: 'Getting Started with Git and GitHub',
    category: 'Programming',
    type: 'Document',
    description: 'Learn how to manage and share your code using GitHub.',
    date: 'November 13, 2026',
  },
];

function MaterialsPage() {
  const [materials, setMaterials] = useState(demoMaterials);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const filteredMaterials = useMemo(() => {
    return materials.filter((material) => {
      const matchesSearch =
        material.title.toLowerCase().includes(search.toLowerCase()) ||
        material.category.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === 'All' || material.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [materials, search, activeFilter]);

  function handleFileSelect(event) {
    setSelectedFile(event.target.files?.[0] || null);
  }

  function handleDemoUpload() {
    if (!selectedFile) return;

    const newMaterial = {
      id: Date.now(),
      title: selectedFile.name,
      category: 'Uploaded material',
      type: selectedFile.type.startsWith('video/') ? 'Video' : 'Document',
      description: 'Locally selected file. Backend upload is not connected yet.',
      date: new Date().toLocaleDateString(),
    };

    setMaterials((previous) => [newMaterial, ...previous]);
    setSelectedFile(null);
  }

  return (
    <section className="space-y-7 p-5 sm:p-8">
      <div>
     <PageHeader
  eyebrow="YOUR LEARNING RESOURCES"
  title="Learning Materials"
  description="Access your course documents, videos and learning resources."
/>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
  <StatCard
    title="Total materials"
    value={materials.length}
    description="Available learning resources"
    icon="📚"
  />

  <StatCard
    title="Videos"
    value={materials.filter((item) => item.type === 'Video').length}
    description="Video learning resources"
    icon="🎥"
  />

  <StatCard
    title="Documents"
    value={materials.filter((item) => item.type === 'Document').length}
    description="Downloadable learning resources"
    icon="📄"
  />
</div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold">Add a learning material</h2>
        <p className="mt-1 text-sm text-slate-500">
          Select a document or video to preview the upload interface.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.webm"
            onChange={handleFileSelect}
            className="min-w-0 flex-1 rounded-xl border border-slate-200 p-3 text-sm"
          />
          <button
            type="button"
            onClick={handleDemoUpload}
            disabled={!selectedFile}
            className="rounded-xl bg-emerald px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            Add to preview
          </button>
        </div>

        {selectedFile && (
          <p className="mt-3 text-sm text-emerald-deep">
            Selected: {selectedFile.name}
          </p>
        )}

        <p className="mt-3 text-xs text-slate-400">
          Demo only: files are not uploaded to a server or stored permanently.
        </p>
      </div>

     
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <div>
    <h2 className="text-xl font-bold">Available resources</h2>
    <p className="mt-1 text-sm text-slate-500">
      Browse the materials shared with your class.
    </p>
  </div>

  <SearchBar
    value={search}
    onChange={setSearch}
    placeholder="Search materials..."
  />
      </div>

      <div className="flex flex-wrap gap-2">
        {['All', 'Video', 'Document'].map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? 'bg-emerald text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

     
{filteredMaterials.length > 0 ? (
  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
    {filteredMaterials.map((material) => (
      <article
        key={material.id}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-emerald-soft px-3 py-2 text-sm font-bold text-emerald-deep">
            {material.type}
          </span>
          <span className="text-xs text-slate-400">{material.date}</span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-emerald-deep">
          {material.category}
        </p>

        <h3 className="mt-2 text-lg font-bold text-slate-800">
          {material.title}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
          {material.description}
        </p>

        <button
          type="button"
          onClick={() => setSelectedMaterial(material)}
          className="mt-5 w-full rounded-xl border border-emerald px-4 py-3 text-sm font-bold text-emerald-deep hover:bg-emerald-soft"
        >
          View details
        </button>
      </article>
    ))}
  </div>
) : (
  <EmptyState
    title="No materials found"
    description="Try another search or select a different filter."
    icon="📂"
  />
)}

{selectedMaterial && (
  <Modal
    isOpen={Boolean(selectedMaterial)}
    onClose={() => setSelectedMaterial(null)}
    title={selectedMaterial.title}
  >
    <p className="text-xs font-bold uppercase text-emerald-deep">
      {selectedMaterial.type}
    </p>

    <p className="mt-5 text-sm leading-7 text-slate-600">
      {selectedMaterial.description}
    </p>

    <p className="mt-4 text-sm text-slate-500">
      Category: {selectedMaterial.category}
    </p>

    <p className="mt-1 text-sm text-slate-500">
      Added: {selectedMaterial.date}
    </p>

    <button
      type="button"
      onClick={() => setSelectedMaterial(null)}
      className="mt-6 w-full rounded-xl bg-emerald px-5 py-3 text-sm font-bold text-white hover:bg-emerald-deep"
    >
      Close
    </button>
  </Modal>
)}
</section>
  );
}

export default MaterialsPage;