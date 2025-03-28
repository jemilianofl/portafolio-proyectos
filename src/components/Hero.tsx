import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            const container = containerRef.current;
            if (!container) return;

            const elements = container.querySelectorAll('.parallax-element');

            const containerRect = container.getBoundingClientRect();
            const centerX = containerRect.left + containerRect.width / 2;
            const centerY = containerRect.top + containerRect.height / 2;

            const deltaX = (e.clientX - centerX) / 30;
            const deltaY = (e.clientY - centerY) / 30;

            elements.forEach((element) => {
                const speed = parseFloat((element as HTMLElement).dataset.speed || '1');
                const moveX = deltaX * speed;
                const moveY = deltaY * speed;
                (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
            ref={containerRef}
        >
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-96 h-96 rounded-full bg-neon-cyan blur-[120px] -top-20 -left-20 parallax-element" data-speed="0.6"></div>
                <div className="absolute w-96 h-96 rounded-full bg-neon-purple blur-[120px] bottom-0 right-0 parallax-element" data-speed="0.8"></div>
                <div className="absolute w-64 h-64 rounded-full bg-neon-pink blur-[100px] bottom-20 left-20 parallax-element" data-speed="0.7"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="mb-6 parallax-element" data-speed="0.3">
                        <span className="px-4 py-1 rounded-full text-sm font-medium border border-neon-cyan/50 text-neon-cyan inline-block mb-4 animate-pulse-glow">
                            Software Developer
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight parallax-element" data-speed="0.2">
                        <span className="text-white">Code-Driven </span><br/>
                        <span className="text-neon-cyan animate-pulse-glow">Problem Solving</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed parallax-element" data-speed="0.4">
                    From concept to deployment: Creating seamless digital 
                    experiences with a focus on performance and reliability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center parallax-element" data-speed="0.5">
                        <a href="#projects" className="neon-button animate-glow">
                            View Projects
                        </a>
                        <a href="#contact" className="neon-button !border-neon-purple !text-neon-purple">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300">
                    <ArrowDown size={32} />
                </a>
            </div>
        </section>
    );
};

export default Hero;