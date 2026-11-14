
function ClassLinkPage({
  meetingUrl = '',
 platform = 'Google Meet',
  classSchedule = 'To be announced',
  classTitle = 'DevUps Academy Live Class',
  onNavigate,
}) {
  const hasMeetingLink = Boolean(meetingUrl.trim());

  return (
    <div className="space-y-8 p-5 sm:p-8">

      {/* Page heading */}
      <section>
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-deep">
          Learning sessions
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-800">
          Class Link
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
          Find your live class information and join your learning sessions
          from one place.
        </p>
      </section>

      {/* Main class card */}
      <section className="overflow-hidden rounded-3xl bg-charcoal text-white shadow-card">
        <div className="p-7 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full bg-emerald/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald">
              Live learning
            </span>

            <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-300">
              {hasMeetingLink ? 'Link available' : 'Awaiting class link'}
            </span>
          </div>

          <h2 className="mt-7 text-2xl font-extrabold sm:text-4xl">
            {classTitle}
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            Attend your scheduled learning sessions, interact with your
            instructors and continue building your skills.
          </p>

          {hasMeetingLink ? (
            <a
              href={meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-emerald px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-deep"
            >
              Join class <span className="ml-2">↗</span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="mt-7 cursor-not-allowed rounded-xl bg-slate-600 px-6 py-3 text-sm font-bold text-slate-300"
            >
              Class link not available yet
            </button>
          )}

          <p className="mt-4 text-xs text-slate-400">
            The join button will become available when the academy provides
            the official meeting link.
          </p>
        </div>

        <div className="h-2 bg-emerald" />
      </section>

      {/* Class information */}
      <section>
        <div className="mb-5">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-deep">
            Class information
          </p>
          <h2 className="mt-1 text-xl font-extrabold text-slate-800">
            Your session details
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-soft text-lg font-extrabold text-emerald-deep">
              01
            </div>
            <p className="mt-5 text-sm text-slate-500">Meeting platform</p>
            <h3 className="mt-1 text-lg font-bold text-slate-800">
              {platform}
            </h3>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-soft text-lg font-extrabold text-emerald-deep">
              02
            </div>
            <p className="mt-5 text-sm text-slate-500">Class schedule</p>
            <h3 className="mt-1 text-lg font-bold text-slate-800">
              {classSchedule}
            </h3>
          </article>
        </div>
      </section>

      {/* Student instructions */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
        <h2 className="text-xl font-extrabold text-slate-800">
          Before joining your class
        </h2>

        <div className="mt-6 space-y-5">
          {[
            'Check the class schedule and confirm the session time.',
            'Make sure your internet connection is stable.',
            'Join using the official meeting link provided by the academy.',
            'Keep your learning materials ready before the session begins.',
          ].map((instruction, index) => (
            <div key={instruction} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-soft text-sm font-bold text-emerald-deep">
                {index + 1}
              </span>
              <p className="pt-1 text-sm leading-6 text-slate-600">
                {instruction}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Help section */}
      <section className="rounded-2xl border border-emerald-100 bg-emerald-soft p-6 sm:p-8">
        <h2 className="text-lg font-extrabold text-emerald-deep">
          Need help accessing your class?
        </h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          If your meeting link or class schedule is unavailable, contact
          the DevUps Academy administrators for assistance.
        </p>

        {onNavigate && (
          <button
            type="button"
            onClick={() => onNavigate('Materials')}
            className="mt-5 rounded-xl border border-emerald-deep px-5 py-3 text-sm font-bold text-emerald-deep transition hover:bg-white"
          >
            View learning materials
          </button>
        )}
      </section>
    </div>
  );
}

export default ClassLinkPage;
