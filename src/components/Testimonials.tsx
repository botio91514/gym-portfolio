import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [testimonialRef, isTestimonialVisible] = useIntersectionObserver();
  const [cardRef, isCardVisible] = useIntersectionObserver();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      content: "Alex transformed my life completely! I lost 40lbs in 6 months and gained confidence I never knew I had. His personalized approach and constant motivation made all the difference.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Mike Rodriguez",
      role: "Software Engineer",
      content: "Best investment I've ever made. Alex's training helped me build strength and muscle while teaching me proper form. The nutrition guidance was game-changing!",
      rating: 5,
      image: "👨‍💻"
    },
    {
      name: "Emily Davis",
      role: "Teacher",
      content: "I was intimidated by gyms before meeting Alex. His patient approach and encouraging attitude made me feel comfortable from day one. Now I'm stronger than ever!",
      rating: 5,
      image: "👩‍🏫"
    },
    {
      name: "James Wilson",
      role: "Business Owner",
      content: "Alex doesn't just train your body, he transforms your mindset. His holistic approach to fitness and nutrition helped me achieve goals I thought were impossible.",
      rating: 5,
      image: "👨‍💼"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef as any}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say 
            about their transformation journey.
          </p>
        </div>

        <div 
          ref={testimonialRef as any}
          className={`relative max-w-4xl mx-auto transition-all duration-1000 ${
            isTestimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Card 
            ref={cardRef as any}
            className={`glass-card overflow-hidden transition-all duration-1000 ${
              isCardVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <CardContent className="p-6 sm:p-8 md:p-12">
              <div className="text-center">
                <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 animate-bounce">
                  {testimonials[currentIndex].image}
                </div>
                
                <div className="flex justify-center mb-4 sm:mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl sm:text-2xl">★</span>
                  ))}
                </div>
                
                <blockquote className="text-base sm:text-lg md:text-xl italic text-foreground mb-6 sm:mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-base sm:text-lg text-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <button
            onClick={prevTestimonial}
            className="absolute -left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 backdrop-blur-lg rounded-full p-2 sm:p-3 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-primary/20 hover:bg-primary/40 backdrop-blur-lg rounded-full p-2 sm:p-3 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
