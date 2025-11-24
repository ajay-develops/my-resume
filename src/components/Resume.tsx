import { resumeData } from "@/data/resume";
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Resume() {
  const { personalInfo, summary, skills, projects, experience, education, certifications } = resumeData;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 print:p-8 print:max-w-full" id="resume">
      {/* Header */}
      <header className="mb-8 border-b-2 border-accent-blue pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
        <h2 className="text-xl text-accent-blue font-semibold mb-4">{personalInfo.title}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-accent-blue" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-accent-blue" />
            <a href={`tel:${personalInfo.phone}`} className="hover:text-accent-blue transition-colors">
              {personalInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-accent-blue" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-accent-blue transition-colors">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub className="text-accent-blue" />
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-accent-blue mb-3 border-b border-gray-200 pb-2">
          PROFESSIONAL SUMMARY
        </h2>
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-accent-blue mb-3 border-b border-gray-200 pb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index}>
              <span className="font-semibold text-gray-900">{skill.category}:</span>{" "}
              <span className="text-gray-700">{skill.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-accent-blue mb-3 border-b border-gray-200 pb-2">
          PROJECTS
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border-l-4 border-accent-blue pl-4">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.name}
                  {project.period && (
                    <span className="text-accent-blue font-normal"> | {project.period}</span>
                  )}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-blue hover:text-accent-blue-dark text-sm mt-1 md:mt-0"
                  >
                    GitHub
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2 italic">{project.techStack}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-accent-blue mb-3 border-b border-gray-200 pb-2">
          EXPERIENCE
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-accent-blue pl-4">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.position} | {exp.company}
                </h3>
                <span className="text-sm text-gray-600 mt-1 md:mt-0">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{exp.location}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-accent-blue mb-3 border-b border-gray-200 pb-2">
          EDUCATION
        </h2>
        <div className="border-l-4 border-accent-blue pl-4">
          <h3 className="text-lg font-semibold text-gray-900">{education.degree}</h3>
          <p className="text-gray-700">
            {education.institution}, {education.location} | {education.startDate} - {education.endDate}
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-accent-blue mb-3 border-b border-gray-200 pb-2">
          CERTIFICATIONS
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
          {certifications.map((cert, index) => (
            <li key={index} className="leading-relaxed">
              <span className="font-semibold">{cert.name}</span> ({cert.issuer})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

