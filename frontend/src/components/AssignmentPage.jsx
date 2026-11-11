import { useMemo, useState } from 'react';

// DEMO DATA: replace with API results or pass real assignments as a prop.
// Every field is optional except id and title. Deadlines/status are not invented
// for real assignments: these values belong only to the examples below.
export const demoAssignments = [
  {
    id: 'a1', title: 'Build a Responsive Portfolio',
    description: 'Create a portfolio website with an about section, project cards, and a working contact form.',
    course: 'Frontend Development', deadline: '2026-11-18T23:59:00', status: 'In Progress',
  },
  {
    id: 'a2', title: 'JavaScript Task Manager',
    description: 'Build an interactive task list with add, complete, and delete functionality using JavaScript.',
    course: 'JavaScript Fundamentals', deadline: '2026-11-14T23:59:00', status: 'Pending',
  },
  {
    id: 'a3', title: 'React Components Practice',
    description: 'Create reusable components, pass props, and organise a responsive layout with Tailwind CSS.',
    course: 'React Development', deadline: '2026-11-08T23:59:00', status: 'Submitted',
  },
  {
    id: 'a4', title: 'Git and GitHub Workflow',
    description: 'Practise creating branches, committing changes, and opening a pull request for team review.',
    course: 'Developer Tools', status: 'Pending',
  },
  {
    id: 'a5', title: 'UI Design Challenge',
    description: 'Translate a dashboard layout into a clean and accessible responsive interface.',
    course: 'UI/UX Design', deadline: '2026-11-22T23:59:00', status: 'In Progress',
  },
  {
    id: 'a6', title: 'API Integration Exercise',
    description: 'Fetch data from a public API and display loading, error, and success states in React.',
    course: 'React Development', deadline: '2026-11-25T23:59:00', status: 'Pending',
  },
];

const Icon = ({ name, size = 20, className = '' }) => {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4.5V3h6v1.5M9 12h6m-6 4h6"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    award: <><circle cx="12" cy="8" r="5"/><path d="m8.8 12-1 9 4.2-2.5 4.2 2.5-1-9"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a2 2 0 0 0 .4 2.2l-2.2 2.2a2 2 0 0 0-2.2-.4l-1 .5h-4.8l-1-.5a2 2 0 0 0-2.2.4l-2.2-2.2A2 2 0 0 0 4.6 15l-.5-1v-4l.5-1a2 2 0 0 0-.4-2.2l2.2-2.2a2 2 0 0 0 2.2.4l1-.5h4.8l1 .5a2 2 0 0 0 2.2-.4l2.2 2.2a2 2 0 0 0-.4 2.2l.5 1v4z"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    close: <path d="M5 5l14 14M19 5 5 19"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4"/></>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
};

const navItems = [
  { label: 'Dashboard', icon: 'grid' },
  { label: 'My Courses', icon: 'book' },
  { label: 'Assignments', icon: 'clipboard', active: true },
  { label: 'Calendar', icon: 'calendar' },
  { label: 'Achievements', icon: 'award' },
];

function formatDeadline(raw) {
  if (!raw) return null;
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}

const statusClasses = {
  'Submitted': 'bg-emerald-soft text-emerald-deep',
  'Completed': 'bg-emerald-soft text-emerald-deep',
  'In Progress': 'bg-sky-50 text-sky-700',
  'Pending': 'bg-amber-50 text-amber-700',
  'Overdue': 'bg-rose-50 text-rose-700',
};

function getDisplayStatus(assignment) {
  const status = assignment.status;
  if (status === 'Submitted' || status === 'Completed') return status;
  if (assignment.deadline) {
    const deadline = new Date(assignment.deadline);
    if (!Number.isNaN(deadline.getTime()) && deadline.getTime() < Date.now()) return 'Overdue';
  }
  return status || null;
}

function Sidebar({ open, onClose }) {
  return <>
    {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-30 bg-charcoal/50 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-charcoal text-white transition-transform duration-200 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-7">
        <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald text-xl font-extrabold text-white">D</span><span className="text-xl font-extrabold tracking-tight">Dev<span className="text-emerald">Ups</span></span></div>
        <button aria-label="Close menu" className="rounded-lg p-1 text-slate-300 lg:hidden" onClick={onClose}><Icon name="close" /></button>
      </div>
      <p className="px-7 pb-3 pt-9 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Learning space</p>
      <nav aria-label="Dashboard navigation" className="space-y-1 px-3">
        {navItems.map(item => <div key={item.label} aria-current={item.active ? 'page' : undefined} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${item.active ? 'bg-emerald text-white' : 'text-slate-300'}`}><Icon name={item.icon} size={19}/>{item.label}</div>)}
      </nav>
      <div className="mt-auto border-t border-white/10 px-3 py-5"><div className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300"><Icon name="settings" size={19}/> Settings</div><div className="mt-3 flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/20 text-sm font-bold text-emerald">DU</div><div><p className="text-sm font-semibold">DevUps Student</p><p className="text-xs text-slate-400">Learner</p></div></div></div>
    </aside>
  </>;
}

function AssignmentCard({ assignment, onOpen }) {
  const status = getDisplayStatus(assignment);
  const deadline = formatDeadline(assignment.deadline);
  return <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-shadow hover:shadow-md sm:p-6">
    <div className="mb-5 flex items-start justify-between gap-3"><span className="inline-flex max-w-[70%] items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slateText">{assignment.course || 'General'}</span>{status && <span className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-bold ${statusClasses[status] || 'bg-slate-100 text-slate-600'}`}>{status}</span>}</div>
    <h3 className="text-lg font-bold leading-snug text-slateText">{assignment.title}</h3>
    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-slate-500">{assignment.description || 'No description has been provided for this assignment.'}</p>
    <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4"><span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500"><Icon name="calendar" size={16}/>{deadline ? `Due ${deadline}` : 'No deadline listed'}</span><button type="button" onClick={() => onOpen(assignment)} className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-emerald-deep hover:underline">View details <Icon name="arrow" size={16}/></button></div>
  </article>;
}

function AssignmentModal({ assignment, onClose }) {
  if (!assignment) return null;
  const deadline = formatDeadline(assignment.deadline);
  const status = getDisplayStatus(assignment);
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/65 p-4" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <section role="dialog" aria-modal="true" aria-labelledby="assignment-dialog-title" className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      <div className="flex items-start justify-between gap-4"><span className="rounded-md bg-emerald-soft px-3 py-1 text-xs font-semibold text-emerald-deep">{assignment.course || 'General'}</span><button type="button" aria-label="Close assignment details" onClick={onClose} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><Icon name="close" /></button></div>
      <h2 id="assignment-dialog-title" className="mt-5 text-2xl font-bold text-slateText">{assignment.title}</h2>
      <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">{assignment.description || 'No description provided.'}</p>
      <dl className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-4 text-sm"><div><dt className="text-slate-500">Deadline</dt><dd className="mt-1 font-semibold text-slateText">{deadline || 'Not listed'}</dd></div><div><dt className="text-slate-500">Status</dt><dd className="mt-1 font-semibold text-slateText">{status || 'Not listed'}</dd></div></dl>
      <button type="button" onClick={onClose} className="mt-6 w-full rounded-xl bg-emerald px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-deep">Close details</button>
    </section>
  </div>;
}

export default function AssignmentPage({ assignments = demoAssignments }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('deadline');
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const list = Array.isArray(assignments) ? assignments : [];
  const counts = useMemo(() => ({
    total: list.length,
    pending: list.filter(a => ['Pending', 'Overdue'].includes(getDisplayStatus(a))).length,
    progress: list.filter(a => getDisplayStatus(a) === 'In Progress').length,
    submitted: list.filter(a => ['Submitted', 'Completed'].includes(getDisplayStatus(a))).length,
  }), [list]);
  const visible = useMemo(() => list.filter(a => {
    const status = getDisplayStatus(a);
    const matchesFilter = filter === 'All' || (filter === 'Submitted' ? ['Submitted', 'Completed'].includes(status) : filter === status);
    const matchesSearch = [a.title, a.description, a.course].some(v => String(v || '').toLowerCase().includes(query.toLowerCase().trim()));
    return matchesFilter && matchesSearch;
  }).sort((a,b) => {
    if (sort === 'title') return String(a.title).localeCompare(String(b.title));
    const aTime = a.deadline ? new Date(a.deadline).getTime() : Number.POSITIVE_INFINITY;
    const bTime = b.deadline ? new Date(b.deadline).getTime() : Number.POSITIVE_INFINITY;
    return (Number.isNaN(aTime) ? Infinity : aTime) - (Number.isNaN(bTime) ? Infinity : bTime);
  }), [list, filter, query, sort]);
  return <div className="min-h-screen bg-white text-slateText">
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    <div className="min-h-screen lg:pl-64">
      <header className="flex h-20 items-center justify-between gap-3 border-b border-slate-100 bg-white px-5 sm:px-8 lg:px-10"><div className="flex items-center gap-3"><button aria-label="Open navigation" onClick={() => setMenuOpen(true)} className="rounded-lg p-2 text-slateText lg:hidden"><Icon name="menu" /></button><div className="text-sm text-slate-500">Dashboard <span className="px-2 text-slate-300">/</span> <span className="font-semibold text-slateText">Assignments</span></div></div><div className="flex items-center gap-4"><span className="hidden text-sm font-medium text-slate-600 sm:inline">Welcome, Student</span><div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-soft text-sm font-bold text-emerald-deep">DU</div></div></header>
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-9 sm:px-8 lg:px-10">
        <div className="mb-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-deep">Your learning journey</p><h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slateText sm:text-4xl">My Assignments</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">Stay on top of your coursework. View assignment details, follow deadlines, and track your progress in one place.</p></div>
        <section aria-label="Assignment overview" className="mb-9 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">{[
          { label: 'Total assignments', count: counts.total, mark: 'clipboard', color: 'text-slateText', background: 'bg-slate-100' },
          { label: 'Pending', count: counts.pending, mark: 'clock', color: 'text-amber-600', background: 'bg-amber-50' },
          { label: 'In progress', count: counts.progress, mark: 'book', color: 'text-sky-700', background: 'bg-sky-50' },
          { label: 'Submitted', count: counts.submitted, mark: 'check', color: 'text-emerald-deep', background: 'bg-emerald-soft' },
        ].map(card => <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5"><div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.color} ${card.background}`}><Icon name={card.mark}/></div><p className="text-2xl font-extrabold text-slateText sm:text-3xl">{card.count}</p><p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{card.label}</p></div>)}</section>
        <section aria-labelledby="assignment-list-heading"><div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><h2 id="assignment-list-heading" className="text-xl font-bold text-slateText sm:text-2xl">Assignment list</h2><p className="mt-1 text-sm text-slate-500">{visible.length} assignment{visible.length === 1 ? '' : 's'} shown</p></div></div>
          <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center"><label className="relative min-w-0 flex-1"><span className="sr-only">Search assignments</span><Icon name="search" size={19} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search assignments..." type="search" className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-emerald" /></label><label className="flex-1 sm:max-w-[190px]"><span className="sr-only">Filter by status</span><select value={filter} onChange={e => setFilter(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slateText"><option value="All">All statuses</option><option value="Pending">Pending</option><option value="In Progress">In Progress</option><option value="Submitted">Submitted</option><option value="Overdue">Overdue</option></select></label><label className="flex-1 sm:max-w-[190px]"><span className="sr-only">Sort assignments</span><select value={sort} onChange={e => setSort(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slateText"><option value="deadline">Sort: Deadline</option><option value="title">Sort: Title A–Z</option></select></label></div>
          {visible.length ? <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{visible.map(assignment => <AssignmentCard key={assignment.id} assignment={assignment} onOpen={setSelected}/>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center"><div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-soft text-emerald-deep"><Icon name="clipboard" size={26}/></div><h3 className="text-lg font-bold">No assignments found</h3><p className="mt-2 text-sm text-slate-500">Try a different search or status filter.</p><button className="mt-5 text-sm font-bold text-emerald-deep underline" onClick={() => {setQuery('');setFilter('All');}}>Clear filters</button></div>}
        </section>
      </main>
    </div>
    <AssignmentModal assignment={selected} onClose={() => setSelected(null)} />
  </div>;
}
