import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
    rootMargin?: string;
    threshold?: number | number[];
    root?: Element | null;
}

export function useIntersectionObserver(
    options: IntersectionObserverOptions = {},
    once: boolean = false // Changed default to false to enable re-animation
): [RefObject<HTMLDivElement>, boolean] {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { rootMargin = '0px', threshold = 0.1, root = null } = options;
    const hasTriggered = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Always update based on intersection regardless of once setting
                // This allows elements to animate when scrolling both up and down
                setIsIntersecting(entry.isIntersecting);

                // If once is true and we're seeing the element for the first time, mark it
                if (once && entry.isIntersecting && !hasTriggered.current) {
                    hasTriggered.current = true;
                }
            },
            { rootMargin, threshold, root }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [rootMargin, threshold, root, once]);

    return [ref as RefObject<HTMLDivElement>, isIntersecting];
}
