import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaLinux,
  FaReact,
  FaDatabase,
  FaCode,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiCplusplus,
  SiMongodb, 
  SiPytorch, 
  SiScikitlearn, 
  SiTailwindcss, 
  SiNextdotjs,
  SiArduino,
  SiIntellijidea,
  SiVim,
  SiApachespark,
  SiScala
} from 'react-icons/si';

const Experience = () => {
  const skills = [
    { icon: <FaPython size={30} />, name: "Python" },
    { icon: <FaJava size={30} />, name: "Java" },
    { icon: <FaJs size={30} />, name: "JavaScript" },
    { icon: <SiCplusplus size={30} />, name: "C++" },
    { icon: <FaHtml5 size={30} />, name: "HTML" },
    { icon: <FaCss3Alt size={30} />, name: "CSS" },
    { icon: <FaDatabase size={30} />, name: "SQL" },
    { icon: <FaTerminal size={30} />, name: "Shell" },
    { icon: <SiApachespark size={30} />, name: "Spark" },
    { icon: <SiScala size={30} />, name: "Scala" },
    { icon: <FaGitAlt size={30} />, name: "Git" },
    { icon: <FaGithub size={30} />, name: "GitHub" },
    { icon: <SiIntellijidea size={30} />, name: "IntelliJ" },
    { icon: <SiArduino size={30} />, name: "Arduino" },
    { icon: <SiVim size={30} />, name: "Vim" },
    { icon: <FaCode size={30} />, name: "QGIS" },
    { icon: <SiPytorch size={30} />, name: "PyTorch" },
    { icon: <SiScikitlearn size={30} />, name: "Scikit-learn" },
    { icon: <SiTailwindcss size={30} />, name: "TailwindCSS" },
    { icon: <SiNextdotjs size={30} />, name: "Next.js" },
    { icon: <SiMongodb size={30} />, name: "MongoDB" },
    { icon: <FaReact size={30} />, name: "React" },
    { icon: <FaLinux size={30} />, name: "Linux" }
  ];

  const experiences = [
    {
      title: "Kitchen Manager — Chick-fil-A",
      period: "Mar, 2022 – Mar, 2024",
      logo: "/images/chickfila.png",
      responsibilities: [
        "Supervised and coordinated a team of 20+ kitchen staff, ensuring efficient operations and adherence to food safety standards",
        "Conducted training sessions to onboard new team members and promote continuous skill development",
        "Motivated and mentored kitchen staff, providing guidance and feedback to enhance performance",
        "Managed inventory levels, placed orders with vendors, and monitored food costs to control expenses",
        "Implemented process improvements to streamline kitchen workflows, resulting in 16% increased productivity",
        "Ensured compliance with health codes, safety regulations, and Chick-fil-A's operational standards"
      ]
    },
    {
      title: "Web Developer — Association of Computing Machinery at UCR",
      period: "Sep, 2023 – Jun, 2025",
      logo: "/images/acm-ucr.png",
      responsibilities: [
        "Developed visually appealing UI components for multiple student organizations using React",
        "Optimized UI displays across devices for improved responsiveness",
        "Leveraged Tailwind CSS utility classes to build and style reusable UI components",
        "Leveraged Next.js to build and statically deploy a high-performance website, optimizing for faster load times and better user experience",
        "Established a Continuous Integration pipeline via GitHub Actions to automatically build, test, and validate code changes"
      ]
    },
    {
      title: "Workshop Lead & Marketing Assistant — BearHack 2025",
      period: "Jan 2025 – May 2025",
      logo: "/images/bearhack.png",
      responsibilities: [
        " Led a technical Git workshop for over 50 multidisciplinary participants, introducing version control fundamentals and hands-on Git/GitHub workflows tailored for beginners",
        " Spearheaded marketing campaigns across 5+ platforms (Instagram, LinkedIn, Discord, campus flyers) to boost event awareness and drive student engagement",
        " Helped increase BearHack 2025 registrations by 35% from the previous year through strategic outreach and direct student communication",
        " Collaborated with a team of organizers to coordinate 3+ promotional events, assisting in outreach to sponsors and university departments"
      ]
    },
    {
      title: "Research and Development Team Member — AI Student Collective (AISC) at UCR",
      period: "Nov, 2024 – Present",
      logo: "/images/aisc.jpg",
      responsibilities: [
        "Connected students with professors for AI-focused research opportunities, fostering academic and professional growth",
        "Authored newsletters and articles to keep students informed about the latest developments in AI and emerging trends",
        "Curated and shared internship opportunities to help students explore and advance their careers in the AI domain",
        "Taught AI literacy to university and K-12 students, providing accessible and engaging learning opportunities",
        "Encouraged and guided students to branch out into the AI space through organized events and resources"
      ]
    }
  ];

  const certifications = [
    {
      image: "/images/productmanagement.jpeg",
      title: "Product Management - Udemy"
    },
    {
      image: "/images/aipm.jpeg",
      title: "AI Product Management - Coursera"
    },
    {
      image: "/images/mathematics.jpeg",
      title: "Mathematics of Machine Learning - Coursera"
    }
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="experience" id="experience" data-aos="fade-up">
      <Container>
        <h2>Technical Skills</h2>
        <div className="skill-icons">
          {skills.map((skill, index) => (
            <div key={index} className="skill-icon">
              <div className="icon-circle">
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        
        <h2 style={{ marginTop: '60px' }}>Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <Row key={index} className="experience-item">
              <Col md={3} className="company-logo">
                <img src={exp.logo} alt={exp.title} />
              </Col>
              <Col md={9} className="experience-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
        </div>

        <h2 style={{ marginTop: '60px' }}>Certifications</h2>
        <p>Here are some of the certifications I am working on along my learning journey. I will update this as soon as I get my hands on the certificates.</p>
        <div className="certifications-box">
          <Carousel responsive={responsive} infinite={true} className="certifications-slider">
            {certifications.map((cert, index) => (
              <div key={index} className="item">
                <img src={cert.image} alt={`Certification ${index + 1}`} />
                <h5>{cert.title}</h5>
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Experience; 