import { Header } from "./components/Header2";
import { About } from "./components/About2";
import { Skills } from "./components/Skills2";
import { Contact } from "./components/Contact3";
import { Experience } from "./components/Experience2";
import { Projects } from "./components/Projects2";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
