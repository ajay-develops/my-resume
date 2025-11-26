import { Document, Page, Text, View, StyleSheet, Link, Font } from "@react-pdf/renderer";
import { resumeData } from "@/data/resume";

// Register fonts if needed (optional)
// Font.register({
//   family: "Open Sans",
//   src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf"
// });

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 24,
    paddingBottom: 20,
    borderBottom: "2 solid #3B82F6",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },
  title: {
    fontSize: 16,
    color: "#3B82F6",
    marginBottom: 16,
    marginTop: 12,
    fontWeight: "semibold",
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    fontSize: 10,
    color: "#374151",
    marginTop: 8,
  },
  contactItem: {
    marginRight: 16,
  },
  section: {
    marginBottom: 18,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3B82F6",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: "1 solid #E5E7EB",
  },
  text: {
    color: "#374151",
    lineHeight: 1.6,
  },
  skillRow: {
    marginBottom: 6,
  },
  skillCategory: {
    fontWeight: "semibold",
    color: "#111827",
  },
  projectItem: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeft: "4 solid #3B82F6",
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  projectName: {
    fontSize: 12,
    fontWeight: "semibold",
    color: "#111827",
  },
  projectPeriod: {
    fontSize: 10,
    color: "#3B82F6",
  },
  techStack: {
    fontSize: 9,
    fontStyle: "italic",
    color: "#6B7280",
    marginBottom: 6,
  },
  bulletPoint: {
    marginBottom: 4,
    paddingLeft: 8,
    fontSize: 10,
    color: "#374151",
  },
  experienceItem: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeft: "4 solid #3B82F6",
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  position: {
    fontSize: 12,
    fontWeight: "semibold",
    color: "#111827",
  },
  dateRange: {
    fontSize: 9,
    color: "#6B7280",
  },
  location: {
    fontSize: 9,
    color: "#6B7280",
    marginBottom: 4,
  },
  link: {
    color: "#3B82F6",
    textDecoration: "none",
  },
});

export const ResumePDF = () => {
  const { personalInfo, summary, skills, projects, experience, education, certifications } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{personalInfo.location}</Text>
            <Text style={styles.contactItem}>{personalInfo.phone}</Text>
            <Link src={`mailto:${personalInfo.email}`} style={[styles.contactItem, styles.link]}>
              {personalInfo.email}
            </Link>
            <Link src={personalInfo.github} style={[styles.contactItem, styles.link]}>
              GitHub
            </Link>
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={styles.text}>{summary}</Text>
        </View>

        {/* Technical Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillRow}>
              <Text style={styles.skillCategory}>
                {skill.category}: <Text style={styles.text}>{skill.items.join(", ")}</Text>
              </Text>
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>
                  {project.name}
                  {project.period && <Text style={styles.projectPeriod}> | {project.period}</Text>}
                </Text>
                {project.github && (
                  <Link src={project.github} style={styles.link}>
                    GitHub
                  </Link>
                )}
              </View>
              <Text style={styles.techStack}>{project.techStack}</Text>
              {project.description.map((desc, descIndex) => (
                <Text key={descIndex} style={styles.bulletPoint}>
                  • {desc}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EXPERIENCE</Text>
          {experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.position}>
                  {exp.position} | {exp.company}
                </Text>
                <Text style={styles.dateRange}>
                  {exp.startDate} - {exp.endDate}
                </Text>
              </View>
              <Text style={styles.location}>{exp.location}</Text>
              {exp.responsibilities.map((resp, respIndex) => (
                <Text key={respIndex} style={styles.bulletPoint}>
                  • {resp}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View style={styles.experienceItem}>
            <Text style={styles.position}>{education.degree}</Text>
            <Text style={styles.text}>
              {education.institution}, {education.location} | {education.startDate} - {education.endDate}
            </Text>
          </View>
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
          {certifications.map((cert, index) => (
            <Text key={index} style={styles.bulletPoint}>
              •{" "}
              {cert.link ? (
                <Link src={cert.link} style={[styles.skillCategory, styles.link]}>
                  {cert.name}
                </Link>
              ) : (
                <Text style={styles.skillCategory}>{cert.name}</Text>
              )}{" "}
              ({cert.issuer})
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

