import { useState, useEffect, useRef } from "react";
import LazyVideo from "./LazyVideo";

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

  const photoItems = [
    { src: '/trns1.jpg', alt: 'Transformation 1' },
    { src: '/trns2.jpg', alt: 'Transformation 2' },
    { src: '/trns3.jpg', alt: 'Transformation 3' },
    { src: '/trns4.jpg', alt: 'Transformation 4' },
  ];

  const videoItems = [
    { src: '/pro1.mp4' },
    { src: '/pro2.mp4' },
    { src: '/pro3.mp4' },
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
          
        </div>

        {/* Enhanced Gallery of Photos and Videos */}
        <div className="w-full flex justify-center mb-14">
          <div className="w-full max-w-6xl">
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-primary">Visual Highlights</h3>
            <div className="bg-secondary/10 p-4 rounded-2xl shadow-inner space-y-4">
              {/* Photos Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photoItems.map((item, index) => (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden group">
                    <img src={item.src} alt={item.alt} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                ))}
              </div>
              {/* Videos Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {videoItems.map((item, index) => (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden group">
                    <LazyVideo src={item.src} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
            {/* Impact Text Below Videos */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mt-8 mb-4">
            Numbers don't lie. Here's the impact we've made together with our community.
          </p>
          </div>
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
