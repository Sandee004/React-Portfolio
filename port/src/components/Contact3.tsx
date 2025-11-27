export function Contact() {
  return (
    <>
      <section
        id="contact"
        // Changed bg to white and border to light gray
        className="px-4 py-20 md:py-20 md:px-8 bg-background dark:bg-gray-900 border-t border-green-600/50"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading: Dark text for contrast on white */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Build Something Amazing
          </h2>

          {/* Subtext: Medium gray */}
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Have a project in mind? Let's collaborate and create something
            exceptional together.
          </p>

          {/* Button: Green Gradient with matching shadow */}
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105 mb-16">
            Get In Touch
          </button>

          {/* Footer Links: Light gray border divider */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-12 border-t border-gray-200">
            <a
              href="#"
              // Links: Gray by default, Green on hover
              className="text-gray-500 hover:text-green-600 transition-colors font-semibold"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition-colors font-semibold"
            >
              Email
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition-colors font-semibold"
            >
              Twitter
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            © 2025 Sandra Oyarekhua. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
