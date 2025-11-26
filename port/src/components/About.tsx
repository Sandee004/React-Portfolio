export function About() {
  return (
    <>
      <section
        id="about"
        className="px-4 py-20 md:py-32 md:px-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950"
      >
        <div className="max-w-8xl lg:max-w-12xl px-6 lg:px-14">
          <div className="grid md:grid-cols-2 items-center">
            {/* Left: Text Content */}
            <div className="py-12 md:py-5">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                I craft beautiful, responsive web experiences with React, modern
                backends with Python, and scalable solutions. Passionate about
                clean code, user experience, and solving real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
                  View My Work
                </button>
                <button className="px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all">
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right: Image Section */}
            <div className="flex justify-center">
              <div className="relative w-70 h-80 md:w-80 md:h-92 rounded-2xl overflow-hidden group">
                <img
                  src="/me3.png"
                  alt="Sandra - Full Stack Developer"
                  style={{ animationDelay: "0.3s" }}
                  className="w-full h-full object-cover animate-float group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
