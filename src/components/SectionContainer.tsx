
import { useEffect, useRef, ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, className = "", children }: SectionContainerProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll(".animate-on-scroll");
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section-container ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
