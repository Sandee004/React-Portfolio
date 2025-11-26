import ExperienceShowcase from "./experience-showcase";

export function Experience() {
  return (
    <>
      <section
        id="experience"
        className="px-4 py-20 md:py-32 md:px-8 bg-slate-950"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Experience
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>
          <ExperienceShowcase />
        </div>
      </section>
    </>
  );
}
