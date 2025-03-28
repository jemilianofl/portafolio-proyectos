import React, { ReactNode, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    className?: string;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    className = '',
    threshold = 0.1,
    rootMargin = '0px',
    once = false, // Default to false to enable re-animation
}) => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold,
        rootMargin
    }, once);

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && once) {
            setHasAnimated(true);
        }
    }, [isVisible, once]);

    const getAnimationClass = () => {
        switch (animation) {
            case 'fade-up':
                return 'transform translate-y-10 opacity-0';
            case 'fade-down':
                return 'transform -translate-y-10 opacity-0';
            case 'fade-left':
                return 'transform translate-x-10 opacity-0';
            case 'fade-right':
                return 'transform -translate-x-10 opacity-0';
            case 'zoom-in':
                return 'transform scale-95 opacity-0';
            case 'zoom-out':
                return 'transform scale-105 opacity-0';
            default:
                return 'opacity-0';
        }
    };

    const isAnimated = once ? (isVisible || hasAnimated) : isVisible;

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className} ${isAnimated
                    ? 'transform translate-y-0 translate-x-0 scale-100 opacity-100'
                    : getAnimationClass()
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;