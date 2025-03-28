import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-neon-cyan/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="text-2xl font-bold neon-text-cyan animate-pulse-glow">
                        <span className="text-white">JEF</span><span className="text-neon-cyan">Tech</span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden neon-button !py-1 !px-3"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } pt-20`}
            >
                <nav className="flex flex-col items-center gap-6 p-8">
                    <MobileNavLink href="#home" onClick={toggleMobileMenu}>Home</MobileNavLink>
                    <MobileNavLink href="#projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
                    <MobileNavLink href="#skills" onClick={toggleMobileMenu}>Skills</MobileNavLink>
                    <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
                </nav>
            </div>
        </header>
    );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="text-gray-300 hover:text-neon-cyan transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-neon-cyan after:transition-all after:duration-300 hover:after:w-full"
    >
        {children}
    </a>
);

const MobileNavLink = ({
    href,
    children,
    onClick
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}) => (
    <a
        href={href}
        onClick={onClick}
        className="text-white text-2xl font-medium hover:text-neon-cyan transition-colors duration-300"
    >
        {children}
    </a>
);

export default Navbar;