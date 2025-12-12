import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in seconds (e.g., 0.1)
  variant?: "fade" | "slide" | "zoom" | "3d-flip";
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  variant = "3d-flip", // Defaulting to the premium 3D look
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Run once, then detach for performance
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before bottom
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // --- Animation Variants ---
  const getVariantStyles = () => {
    switch (variant) {
      case "slide":
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20";
      case "zoom":
        return isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90";
      case "3d-flip":
        // The "Futuristic/Premium" Look: slight rotation + slide
        return isVisible
          ? "opacity-100 translate-y-0 rotate-x-0 scale-100"
          : "opacity-0 translate-y-12 rotate-x-12 scale-95 origin-center"; 
      default: // fade
        return isVisible 
          ? "opacity-100" 
          : "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      // Combine base styles with the dynamic state
      className={`
        transform-gpu will-change-transform 
        transition-all duration-1000 
        ease-[cubic-bezier(0.2,0.8,0.2,1)] 
        ${getVariantStyles()} 
        ${className}
      `}
      style={{
        transitionDelay: `${delay}s`,
        // Ensures the 3D effect has depth
        perspective: "1000px", 
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;