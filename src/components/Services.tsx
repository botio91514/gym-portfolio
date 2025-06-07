import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Services = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver();
  const [cardsRef, isCardsVisible] = useIntersectionObserver();

  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific goals and fitness level",
      price: "$80",
      duration: "per session",
      features: [
        "Customized workout plans",
        "Form correction & technique",
        "Progress tracking",
        "Nutrition guidance",
        "24/7 support"
      ],
      popular: false
    },
    {
      title: "Premium Package",
      description: "Complete transformation program with full support and nutrition",
      price: "$299",
      duration: "per month",
      features: [
        "3 sessions per week",
        "Custom meal plans",
        "Body composition analysis",
        "Supplement recommendations",
        "Priority booking",
        "WhatsApp support"
      ],
      popular: true
    },
    {
      title: "Group Training",
      description: "High-energy group sessions for motivation and community support",
      price: "$35",
      duration: "per session",
      features: [
        "Small group (max 6 people)",
        "Varied workout styles",
        "Team motivation",
        "Cost-effective",
        "Flexible scheduling"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef as any}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Training <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
            Choose the perfect program that fits your lifestyle and goals. 
            Each program is designed to deliver maximum results with expert guidance.
          </p>
        </div>

        <div 
          ref={cardsRef as any}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 ${
            isCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className={`glass-card relative overflow-hidden hover:scale-105 transition-all duration-300 ${
                service.popular
                  ? "border-primary/50 shadow-lg shadow-primary/20"
                  : ""
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground mt-2">
                  {service.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{service.price}</span>
                  <span className="text-sm sm:text-base text-muted-foreground ml-2">{service.duration}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full mt-4 sm:mt-6 text-sm sm:text-base ${
                    service.popular
                      ? "btn-primary"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                  variant={service.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
