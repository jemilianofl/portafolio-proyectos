import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';
import { ArrowUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Index = () => {
    const [showScrollTop, setShowScrollTop] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <Hero />
            <ProjectList />

            {/* Skills Section */}
            <section id="skills" className="py-20 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection animation="fade-down" className="text-center mb-12" once={false}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-white">Technical </span>
                            <span className="text-neon-cyan">Skills</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Technologies and tools I work with to build amazing digital experiences.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <AnimatedSection animation="fade-right" delay={100} once={false}>
                            <SkillCategory
                                title="Frontend Development"
                                skills={["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]}
                                color="cyan"
                            />
                        </AnimatedSection>
                        <AnimatedSection animation="fade-up" delay={200} once={false}>
                            <SkillCategory
                                title="Backend Development"
                                skills={["Node.js", "Express", "Python", "Django", "GraphQL"]}
                                color="purple"
                            />
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left" delay={300} once={false}>
                            <SkillCategory
                                title="Tools & Others"
                                skills={["Git", "Docker", "AWS", "Figma", "CI/CD"]}
                                color="pink"
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <AnimatedSection animation="fade-up" once={false}>
                <Contact />
            </AnimatedSection>

            {/* Footer */}
            <footer className="py-8 border-t border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection animation="fade-up" delay={100} once={false}>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 mb-4 md:mb-0">
                                © {new Date().getFullYear()} JEFTech. All rights reserved.
                            </p>
                            <div className="flex gap-4">
                                <span className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">Imagine product, do with code</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </footer>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 p-3 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/50 transition-all duration-300 hover:bg-neon-cyan/20 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <ArrowUp size={20} />
            </button>
        </div>
    );
};

const SkillCategory = ({
    title,
    skills,
    color
}: {
    title: string;
    skills: string[];
    color: 'cyan' | 'purple' | 'pink';
}) => {

    return (
        <div className="glass-card p-6 h-full">
            <h3 className={`text-lg font-semibold mb-4 ${color === 'cyan' ? 'text-neon-cyan' : color === 'purple' ? 'text-neon-purple' : 'text-neon-pink'}`}>
                {title}
            </h3>
            <ul className="space-y-2">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2"
                    >
                        <span className={`inline-block w-2 h-2 rounded-full ${color === 'cyan' ? 'bg-neon-cyan' : color === 'purple' ? 'bg-neon-purple' : 'bg-neon-pink'}`}></span>
                        <span className="text-gray-300">{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;