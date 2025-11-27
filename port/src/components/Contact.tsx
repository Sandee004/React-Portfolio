export function Contact() {
  return (
    <>
      <section id="contact" className="px-4 py-20 md:py-20 md:px-8 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind? Let's collaborate and create something
            exceptional together.
          </p>
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105 mb-16">
            Get In Touch
          </button>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-slate-800">
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold"
            >
              Email
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold"
            >
              Twitter
            </a>
          </div>

          <p className="text-slate-600 text-sm mt-8">
            © 2025 Sandra Oyarekhua. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
