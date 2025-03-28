import { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import AnimatedSection from './AnimatedSection';
import TWAPhoto from "../assets/images/TWA.png";


// Sample project data
const projects: ProjectProps[] = [
    {
        title: "Techwomen Acadamy",
        description: "My first project using React and Bootstrap for the Frontend and Java with Spring Boot for the Backend. Deployed in AWS EC2 and Vercel.",
        tags: ["React", "Bootstrap", "Java", "Spring Boot", "AWS", "Vercel"],
        image: TWAPhoto,
        link: "https://proyecto-integrador-iota-two.vercel.app",
        repo: "https://github.com/sincache/proyecto-integrador",
    },
    {
        title: "MFC Automated Reports (Confidential)",
        description: "A desktop application for managing MFC reports with a user-friendly interface and automated data processing.",
        tags: ["Python", "Qt", "Cython"],
    },
    {
        title: "AI Agent Software (Confidential)",
        description: "A petrophysical agent software for petrophysical interpretation.",
        tags: ["Cython", "C++", "Python", "Qt", "HuggingFace", "PyTorch"],
    },
    {
        title: "Pretroleum Production Analytics Tool",
        description: "A google colab notebook who does a production analitycs using ML and Stats.",
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn"],
    },
    {
        title: "Data Analytics Dashboard SaaS Tool (In Progress)",
        description: "Software for data analytics of well logs.",
        tags: ["Node.js", "Express", "MongoDB", "JWT", "React", "Tailwind CSS"],
    },
    {
        title: "Own RAG (In Progress)",
        description: "Software for ingest information with RAG.",
        tags: ["Python", "HuggingFace"],
    },
];

// Filter categories
const categories = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "AI/ML"
];

const ProjectList = () => {
    const [filter, setFilter] = useState("All");

    // In a real application, you would filter projects based on categories
    const filteredProjects = projects;

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-6">
                <AnimatedSection animation="fade-down" className="text-center mb-12" once={false}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-white">My </span>
                        <span className="text-neon-cyan">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of my work across various technologies and domains. Each project represents unique challenges and solutions.
                    </p>
                </AnimatedSection>

                <AnimatedSection
                    animation="fade-up"
                    delay={200}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                    once={false}
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${filter === category
                                    ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50"
                                    : "bg-muted/30 text-gray-400 hover:bg-neon-cyan/10 hover:text-gray-300 border border-transparent"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <AnimatedSection
                            key={index}
                            className={project.featured ? "md:col-span-2" : ""}
                            animation="zoom-in"
                            delay={index * 100}
                            once={false}
                        >
                            <ProjectCard {...project} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectList;