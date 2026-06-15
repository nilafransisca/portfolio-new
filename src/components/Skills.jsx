import { education, softSkills, technicalSkills } from "../data";

function SectionHeading({ children }) {
  return (
    <h5 className="relative inline-block font-semibold text-gray-800 mb-8 pb-2">
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[3px] rounded bg-gradient-to-r from-pink-accent to-pink-soft" />
    </h5>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-pink-light">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-3xl text-gray-800 mb-12">
          Skills & Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Education */}
          <div className="bg-white rounded-2xl shadow p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-accent/30">
            <SectionHeading>🎓 Education</SectionHeading>
            <ul className="space-y-4 text-left">
              {education.map((item) => (
                <li
                  key={item.title}
                  className="bg-pink-light border-l-4 border-pink-accent rounded-lg p-4 transition-all duration-300 hover:bg-pink-soft/40 hover:translate-x-1"
                >
                  <strong className="block text-pink-accent mb-1">
                    {item.title}
                  </strong>
                  <span className="text-sm text-gray-500">
                    {item.subtitle}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-2xl shadow p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-accent/30">
            <SectionHeading>💡 Soft Skills</SectionHeading>
            <ul className="text-left space-y-2">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="relative pl-6 text-gray-600 text-[0.95rem] transition-colors hover:text-pink-accent"
                >
                  <span className="absolute left-0 text-pink-accent font-bold">
                    ✓
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="bg-white rounded-2xl shadow p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-pink-accent/30">
            <SectionHeading>⚡ Technical Skills</SectionHeading>
            <ul className="text-left space-y-2">
              {technicalSkills.map((skill) => (
                <li
                  key={skill}
                  className="relative pl-6 text-gray-600 text-[0.95rem] transition-colors hover:text-pink-accent"
                >
                  <span className="absolute left-0 text-pink-accent font-bold">
                    ✓
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
