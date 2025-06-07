import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Hero = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  const [ctaRef, isCtaVisible] = useIntersectionObserver();
  const [imageRef, isImageVisible] = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-fade-in-slow"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-fade-in"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-fade">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight animate-fade-in">
              TRANSFORM YOUR
              <span className="block text-gradient animate-glow animate-fade-in-delay mt-2">BODY & MIND</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed animate-fade-in-delay">
              Unlock your true potential with professional personal training, 
              expert nutrition guidance, and a supportive community that will 
              push you to achieve extraordinary results.
            </p>
            
            <div 
              ref={ctaRef as any}
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center transition-all duration-1000 ${
                isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto animate-glow hover:animate-pulse transition-all duration-300"
              >
                START YOUR JOURNEY
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 w-full sm:w-auto hover:animate-pulse"
              >
                View Programs
              </Button>
            </div>
            
            <div 
              ref={statsRef as any}
              className={`mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 ${
                isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clients Trained</div>
              </div>
              <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-background/50 backdrop-blur-sm rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          <div 
            ref={imageRef as any}
            className={`relative flex justify-center items-center transition-all duration-1000 ${
              isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              <img
                src="/p1.jpg"
                alt="Professional Fitness Trainer"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-in" style={{animationDelay: '1.5s', animationFillMode: 'both'}}>
        <button
          onClick={() => scrollToSection("about")}
          className="text-primary hover:text-accent transition-colors duration-300 hover:animate-pulse"
          aria-label="Scroll to About section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
