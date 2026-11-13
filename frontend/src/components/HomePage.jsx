
function HomePage({ onNavigate }) {
  const quickLinks = [
    {
      title: 'Learning Materials',
      description: 'Access your course notes and learning resources.',
      action: 'Materials',
      number: '01',
    },
    {
      title: 'Live Classes',
      description: 'Find your class information and join scheduled sessions.',
      action: 'Class Link',
      number: '02',
    },
    {
      title: 'Assignments',
      description: 'View your tasks and keep track of your progress.',
      action: 'Assignments',
      number: '03',
    },
    {
      title: 'Students',
      description: 'View the student learning community and task updates.',
      action: 'Students',
      number: '04',
    },
  ];

  return (
    <div className="space-y-8 p-5 sm:p-8">

      {/* Welcome section */}
      <section className="relative overflow-hidden rounded-3xl bg-charcoal p-7 text-white sm:p-10">
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald">
            Welcome to DevUps Academy
          </p>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            Learn new skills.
            <br />
            Build your future.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
            Your learning journey starts here. Access your materials,
            attend classes and stay updated with your assignments.
          </p>

          <button
            onClick={() => onNavigate('Materials')}
            className="mt-7 rounded-xl bg-emerald px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-deep"
          >
            Explore learning materials
          </button>
        </div>

        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
        <div className="pointer-events-none absolute -bottom-28 right-20 h-64 w-64 rounded-full bg-emerald/10 blur-2xl" />
      </section>

      {/* Overview */}
      <section>
        <div className="mb-5">
          <p className="text-sm font-medium text-emerald-deep">
            YOUR OVERVIEW
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-800">
            Your learning space
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Everything you need for your learning journey in one place.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Learning Materials', value: 'Explore', icon: 'M' },
            { label: 'Live Classes', value: 'View details', icon: 'L' },
            { label: 'Assignments', value: 'View tasks', icon: 'A' },
            { label: 'Students', value: 'View community', icon: 'S' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-soft font-extrabold text-emerald-deep">
                {item.icon}
              </div>
              <p className="mt-5 text-sm text-slate-500">{item.label}</p>
              <p className="mt-1 font-bold text-slate-800">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick access */}
      <section>
        <div className="mb-5">
          <p className="text-sm font-medium text-emerald-deep">
            QUICK ACCESS
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-800">
            Explore your portal
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {quickLinks.map((item) => (
            <button
              key={item.action}
              onClick={() => onNavigate(item.action)}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-card transition hover:-translate-y-1 hover:border-emerald hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-emerald-deep">
                  {item.number}
                </span>
                <span className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-deep">
                  →
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-emerald-deep">
                Open section →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Notice */}
      <section className="rounded-2xl border border-emerald-100 bg-emerald-soft p-6">
        <h3 className="font-bold text-emerald-deep">
          Stay connected with your learning
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Check your learning materials, class information and assignments
          regularly. Contact the academy administrators if you need assistance.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
