export function About() {
  return (
    <section id="about" className="py-20 mt-8 bg-background dark:bg-gray-900">
      <div className="container dark:bg-background mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl font-bold mb-4 text-text dark:text-white animate-slide-in">
              Sandra Oyarekhua
            </h1>
            <h2
              className="text-3xl text-green-500 dark:text-green-300 mb-4 animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              Full Stack Developer
            </h2>
            <p
              className="text-text-light dark:text-gray-300 mb-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              I specialize in building efficient, scalable web and mobile
              applications—from user-focused interfaces to powerful backend
              systems. With experience across fullstack development, I work
              confidently with tools like React, TypeScript, Tailwind, Flask,
              and PostgreSQL to ship clean, production-ready products.
            </p>
            <p
              className="text-text-light dark:text-gray-300 mb-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              I’ve also built and integrated Web3 backend services using
              technologies like ethers.js and web3, and I pay close attention to
              performance, modularity, and real-world usability. Whether it's a
              PWA, a crypto wallet flow, or an offline-first feed app for
              farmers, I care about doing the job well—and making sure it
              actually works where it matters.
            </p>

            <a
              href="https://drive.google.com/file/d/1ZyG5YxtmQBMoroMIRfiv_gtLUuTrMcLa/view?usp=sharing"
              className="bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-md hover:bg-transparent hover:border-2 hover:border-green-500 dark:hover:border-green-300 hover:text-black dark:hover:text-white transition duration-300 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              View Resume
            </a>
          </div>
          <div className="md:w-1/2 justify-center mt-8 flex">
            <img
              src="/me3.png"
              alt="A animated pic"
              className="rounded-lg shadow-xl border-2 border-green-500 animate-float h-[380px] w-[340px] dark:bg-gray-800"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
