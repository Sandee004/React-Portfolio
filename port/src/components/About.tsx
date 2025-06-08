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
              style={{ animationDelay: "0.4s" }}
            >
              I enjoy building efficient, scalable solutions and exploring how
              technology intersects with everyday challenges. With a background
              in agriculture and agroinformatics, I’m particularly interested in
              creating tech-driven solutions for sustainability and food
              systems.
            </p>
            <p
              className="text-text-light dark:text-gray-300 mb-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Beyond coding, I love writing, speaking at tech events, and
              experimenting with new ideas—whether in software, automation, or
              emerging innovations like lab-grown food. I'm always looking for
              ways to push boundaries and make an impact.
            </p>
            <a
              href="https://drive.google.com/file/d/1Im2gmfQQv74FQP_KjwJse7WNL19rIxJb/view?pli=1"
              className="bg-black dark:bg-white dark:text-black text-white px-6 py-3 rounded-md hover:bg-transparent hover:border-2 hover:border-green-500 dark:hover:border-green-300 hover:text-black dark:hover:text-white transition duration-300 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              View Resume
            </a>
          </div>
          <div className="md:w-1/2 justify-center mt-8 flex">
            <img
              src="/me2.jpg"
              className="rounded-lg shadow-xl border-2 border-green-500 animate-float h-[370px] w-[370px] dark:bg-gray-800"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
