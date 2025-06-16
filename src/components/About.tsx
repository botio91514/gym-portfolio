import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const [contentRef, isContentVisible] = useIntersectionObserver();
  const [imageRef, isImageVisible] = useIntersectionObserver();

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div 
            ref={contentRef as any}
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Meet Your
              <span className="text-gradient block mt-1">Elite Trainer</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              With over 8 years of experience in the fitness industry, I've dedicated 
              my life to helping people achieve their fitness goals and transform their 
              lives. My approach combines cutting-edge training methods with personalized 
              nutrition plans to deliver exceptional results.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">ACE</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Certified Personal Trainer</div>
              </Card>
              
              <Card className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">CSCS</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Strength & Conditioning</div>
              </Card>
              
              <Card className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">CNS</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Certified Nutrition Specialist</div>
              </Card>
              
              <Card className="glass-card p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">CPT</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Corrective Exercise</div>
              </Card>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-primary">Specializations:</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  Weight Loss & Body Composition
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  Strength Training & Powerlifting
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  Athletic Performance Enhancement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                  Injury Prevention & Rehabilitation
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            ref={imageRef as any}
            className={`relative mt-8 lg:mt-0 transition-all duration-1000 ${
              isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-card/40 backdrop-blur-lg border border-border/30 rounded-2xl p-6 sm:p-8">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <img 
                    src="/p2.jpg" 
                    alt="Alex Johnson - Elite Personal Trainer" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="mt-4 sm:mt-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Maulin Christian</h3>
                  <p className="text-sm sm:text-base text-primary font-semibold">Elite Personal Trainer & Gym Owner</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                    "Transforming lives through fitness is not just my profession, it's my passion."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
