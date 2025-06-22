import { useEffect, useState, useRef } from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import LazyVideo from './LazyVideo';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let frame: number;
    let speed = 1; // px per frame

    function autoScroll() {
      if (!container) return;
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        // Loop back to start
        container.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        container.scrollLeft += speed;
      }
      frame = requestAnimationFrame(autoScroll);
    }
    frame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    // Initialize Fancybox with basic settings
    Fancybox.bind("[data-fancybox]", {
      groupAll: true
    });
    return () => {
      Fancybox.destroy();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('gallery');
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const galleryItems = [
    { 
      fullImage: "/1.jpg", 
      thumbImage: "/1.jpg", 
      title: "Professional Training",
      description: "State-of-the-art equipment and expert guidance"
    },
    { 
      fullImage: "/2.jpg", 
      thumbImage: "/2.jpg", 
      title: "Personal Coaching",
      description: "One-on-one attention for optimal results"
    },
    { 
      fullImage: "/3.jpg", 
      thumbImage: "/3.jpg", 
      title: "Group Sessions",
      description: "Motivating group workouts"
    },
    { 
      fullImage: "/4.jpg", 
      thumbImage: "/4.jpg", 
      title: "Fitness Journey",
      description: "Transform your body and mind"
    },
    { 
      fullImage: "/5.jpg", 
      thumbImage: "/5.jpg", 
      title: "Advanced Training",
      description: "Take your fitness to the next level"
    },
    { 
      fullImage: "/6.jpg", 
      thumbImage: "/6.jpg", 
      title: "Recovery Zone",
      description: "Rest and recovery facilities"
    },
    { 
      fullImage: "/7.jpg", 
      thumbImage: "/7.jpg", 
      title: "Cardio Area",
      description: "Modern cardio equipment for effective workouts"
    },
    { 
      fullImage: "/8.jpg", 
      thumbImage: "/8.jpg", 
      title: "Weight Training",
      description: "Comprehensive weight training facilities"
    },
    { 
      fullImage: "/9.jpg", 
      thumbImage: "/9.jpg", 
      title: "Yoga Studio",
      description: "Peaceful space for mind-body wellness"
    },
    { 
      fullImage: "/10.jpg", 
      thumbImage: "/10.jpg", 
      title: "CrossFit Zone",
      description: "High-intensity functional training area"
    },
    { 
      fullImage: "/temp.png", 
      thumbImage: "/temp.png", 
      title: "Nutrition Center",
      description: "Expert nutrition guidance and supplements"
    },
    { 
      fullImage: "/temp2.jpg", 
      thumbImage: "/temp2.jpg", 
      title: "Locker Rooms",
      description: "Modern amenities for your comfort"
    }
  ];

  return (
    <section 
      id="gallery" 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-fade-in-slow"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-fade-in"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 animate-fade-in">
            Our <span className="text-gradient animate-glow">Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
            Explore our state-of-the-art facilities and see the transformation journey of our clients
          </p>
        </div>

        <div ref={scrollRef} className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex flex-nowrap items-center" style={{ minHeight: '180px', height: 'clamp(160px,30vw,320px)' }}>
            {galleryItems.map((item, index) => (
              <a
                key={index}
                href={item.fullImage}
                data-fancybox="gallery"
                data-caption={`<h3 class='text-xl font-bold mb-2'>${item.title}</h3><p class='text-gray-300'>${item.description}</p>`}
                className="group relative overflow-hidden custom-cursor flex items-center justify-center mx-1"
                style={{ minWidth: 'clamp(160px,40vw,320px)', height: 'clamp(140px,28vw,300px)' }}
              >
                <img
                  src={item.thumbImage}
                  alt={item.title}
                  className="max-h-full max-w-full object-cover rounded-md transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  style={{ height: '90%', width: '90%' }}
                />
              </a>
            ))}
          </div>
        </div>
        {/* Videos below the gallery */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-8 w-full">
          <div className="flex flex-col items-center w-full md:w-1/2 max-w-xl mx-auto">
            <div className="bg-black flex items-center justify-center rounded-xl overflow-hidden w-full aspect-video">
              <LazyVideo
                src="/vdo1.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 text-center px-2">
              <h3 className="text-base sm:text-lg font-bold text-primary break-words">Workout Highlights</h3>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">A glimpse into our intense training sessions and gym atmosphere.</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 max-w-xl mx-auto">
            <div className="bg-black flex items-center justify-center rounded-xl overflow-hidden w-full aspect-video">
              <LazyVideo
                src="/vdo2.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 text-center px-2">
              <h3 className="text-base sm:text-lg font-bold text-primary break-words">Client Transformations</h3>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">See the amazing progress and results achieved by our members.</p>
            </div>
          </div>
        </div>
        {/* Centered vdo3.mp4 below the two videos */}
        <div className="flex justify-center items-center mt-8 w-full">
          <div className="flex flex-col items-center w-full md:w-1/2 max-w-xl mx-auto">
            <div className="bg-black flex items-center justify-center rounded-xl overflow-hidden w-full aspect-video">
              <LazyVideo
                src="/vdo3.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 text-center px-2">
              <h3 className="text-base sm:text-lg font-bold text-primary break-words">Maruti susuki Arena Fest</h3>
              <p className="text-xs sm:text-sm text-muted-foreground break-words">Take a virtual tour of arena competition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 