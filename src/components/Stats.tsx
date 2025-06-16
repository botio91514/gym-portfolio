import { useState, useEffect, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    weightLost: 0,
    experience: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { id: "clients", label: "Happy Clients", value: 500, suffix: "+" },
    { id: "weightLost", label: "Total Weight Lost", value: 2500, suffix: "lbs" },
    { id: "experience", label: "Years Experience", value: 8, suffix: "+" },
    { id: "satisfaction", label: "Satisfaction Rate", value: 95, suffix: "%" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        let startTime: number | null = null;
        const duration = 2000; // 2 seconds

        const animateCount = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);

          const currentValue = Math.floor(progress * stat.value);
          setCounts(prev => ({
            ...prev,
            [stat.id]: currentValue
          }));

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          }
        };

        requestAnimationFrame(animateCount);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. Here's the impact we've made together with our community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 glass-card group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                  {counts[stat.id as keyof typeof counts]}{stat.suffix}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
