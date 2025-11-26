export function Skills() {
  return (
    <>
      <section
        id="skills"
        className="px-4 py-20 md:py-32 md:px-8 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Skills
            </h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "React",
                level: 85,
                color: "from-cyan-400 to-blue-500",
              },
              {
                name: "Flask",
                level: 85,
                color: "from-purple-500 to-indigo-600",
              },
              {
                name: "FastAPI",
                level: 70,
                color: "from-purple-500 to-indigo-600",
              },
              {
                name: "TypeScript",
                level: 70,
                color: "from-cyan-400 to-blue-500",
              },
              {
                name: "Tailwind CSS",
                level: 85,
                color: "from-cyan-400 to-cyan-600",
              },
              {
                name: "PostgreSQL",
                level: 80,
                color: "from-purple-500 to-indigo-600",
              },
              {
                name: "Web3",
                level: 50,
                color: "from-purple-400 to-purple-600",
              },
              {
                name: "React Native",
                level: 80,
                color: "from-cyan-400 to-blue-500",
              },
            ].map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-300 font-semibold text-lg">
                    {skill.name}
                  </span>
                  <span className="text-cyan-400 font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover:shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
