import React from 'react';
import { Code,  ArrowRight } from 'lucide-react';

export interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link?: string;
    repo?: string;
    featured?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
    title,
    description,
    tags,
    image,
    link,
    repo,
    featured = false,
}) => {
    return (
        <div
            className={`glass-card group transition-all duration-500 h-full flex flex-col ${featured ? 'md:col-span-2 neon-border' : ''
                }`}
        >
            <div className="p-1">
                <div className="overflow-hidden rounded-t-md bg-muted/30 aspect-video relative">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                            <span className="text-4xl text-neon-cyan opacity-30">&lt;/&gt;</span>
                        </div>
                    )}

                    <div className="absolute top-2 left-2 flex gap-2">
                        {featured && (
                            <span className="text-xs font-medium px-2 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan">
                                Featured
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-1 rounded-full bg-muted/50 text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    {repo && (
                        <a
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1 text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-300"
                        >
                            <Code size={16} />
                            <span>Source</span>
                        </a>
                    )}

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1 text-sm text-gray-400 hover:text-neon-cyan transition-colors duration-300 ml-auto"
                        >
                            <span>View Project</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;