import MaterialsPage from './components/MaterialsPage';
import ClassLinkPage from './components/ClassLinkPage';
import HomePage from './components/HomePage';
import { useState } from 'react';
import AssignmentPage from './components/AssignmentPage';

const navigation = [
  { name: 'Dashboard', icon: '⌂' },
  { name: 'Materials', icon: '▤' },
  { name: 'Class Link', icon: '↗' },
  { name: 'Assignments', icon: '▣' },
  { name: 'Students', icon: '♙' },
];

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Mobile header */}
      <header className="flex items-center justify-between bg-white px-5 py-4 shadow-sm lg:hidden">
        <h1 className="text-xl font-extrabold text-emerald-deep">
          DevUps<span className="text-slate-800"> Academy</span>
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border px-3 py-2"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-charcoal text-white transition-transform lg:static lg:translate-x-0 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="border-b border-white/10 px-7 py-7">
            <h1 className="text-2xl font-extrabold">
              DevUps<span className="text-emerald">.</span>
            </h1>
            <p className="mt-1 text-xs text-slate-400">ACADEMY PORTAL</p>
          </div>

          <nav className="space-y-2 px-4 py-7">
            <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              Menu
            </p>

            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActivePage(item.name);
                  setMenuOpen(false);
                }}
                className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  activePage === item.name
                    ? 'bg-emerald text-white'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-0 w-full border-t border-white/10 p-5">
            <p className="text-sm font-semibold">DevUps Academy</p>
            <p className="mt-1 text-xs text-slate-400">Student learning portal</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">

          <div className="hidden items-center justify-between border-b border-slate-200 bg-white px-8 py-5 lg:flex">
            <div>
              <p className="text-sm text-slate-500">Learning portal</p>
              <h2 className="text-xl font-bold">{activePage}</h2>
            </div>

            <div className="rounded-full bg-emerald-soft px-4 py-2 text-sm font-semibold text-emerald-deep">
              Student Portal
            </div>
          </div>

          {activePage === 'Dashboard' && (
  <HomePage onNavigate={setActivePage} />
)}
          {activePage === 'Assignments' && (
            <AssignmentPage />
          )}
          {activePage === 'Class Link' && (
  <ClassLinkPage onNavigate={setActivePage} />
)}
          {activePage === 'Materials' && (
  <MaterialsPage />
)}
          {activePage !== 'Dashboard' &&
          activePage !== 'Assignments' &&
          activePage !== 'Class Link' &&
          activePage !== 'Materials' && (
            <section className="p-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-8">
                <h2 className="text-2xl font-bold">{activePage}</h2>
                <p className="mt-3 text-slate-500">
                  This section is ready for its assigned component.
                </p>
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
}

export default App;