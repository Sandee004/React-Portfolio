export function About() {
  return (
    <section
      id="about"
      className="py-20 mt-8 border-b-2 border-green-600/50 bg-gray-50 dark:bg-gray-900 lg:min-h-screen flex items-center"
    >
      <div className="container dark:bg-background mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* --- Text Content (Left) --- */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4 text-text dark:text-white animate-slide-in">
              Sandra Oyarekhua
            </h1>
            <h2
              className="text-3xl text-green-500 dark:text-green-400 mb-6 animate-slide-in font-semibold"
              style={{ animationDelay: "0.2s" }}
            >
              Full Stack Developer
            </h2>
            <p
              className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              I specialize in building efficient, scalable web and mobile
              applications—from user-focused interfaces to powerful backend
              systems. With experience across fullstack development, I work
              confidently with tools like React, TypeScript, Tailwind, Flask,
              and PostgreSQL to ship clean, production-ready products.
            </p>
            <p
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              I’ve also built and integrated Web3 backend services using
              technologies like ethers.js and web3, and I pay close attention to
              performance, modularity, and real-world usability. Whether it's a
              PWA, a crypto wallet flow, or an offline-first feed app for
              farmers, I care about doing the job well.
            </p>

            <a
              href="https://drive.google.com/file/d/1ZyG5YxtmQBMoroMIRfiv_gtLUuTrMcLa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              View Resume
            </a>
          </div>

          {/* --- Image Section (Right) --- */}
          {/* logic: group creates the hover context. w-full on mobile, w-1/2 on laptop */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-80 md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden group shadow-2xl">
              <img
                src="/me3.png"
                alt="Sandra - Full Stack Developer"
                className="w-full h-full object-cover 
                
                /* MOBILE BEHAVIOR: Floating Animation */
                animate-float 
                
                /* LAPTOP BEHAVIOR: Stop float, Scale on Hover */
                md:animate-none 
                md:transition-transform md:duration-700 md:ease-out
                md:group-hover:scale-110"
              />

              {/* Gradient Overlay (Only visible on hover/laptop for dramatic effect) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
