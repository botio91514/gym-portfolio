import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi Maulin! I'm interested in personal training.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Fitness Goal: ${formData.goal}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/7778835090?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected with Maulin shortly!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      goal: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Start Your <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
            Ready to transform your life? Let's discuss your goals and create a 
            personalized plan that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="glass-card animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-center">
                Book Your Free Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base"
                  />
                </div>
                
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base"
                />
                
                <Input
                  name="goal"
                  placeholder="Your Fitness Goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell me more about your current fitness level and what you'd like to achieve..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary text-sm sm:text-base"
                />
                
                <Button type="submit" className="btn-primary w-full text-sm sm:text-base sm:text-lg py-4 sm:py-6">
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <Card className="glass-card p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📱</span>
                  <span className="text-sm sm:text-base">+91 77788 35090</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">✉️</span>
                  <span className="text-sm sm:text-base">MaulinEliteTrainer@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="text-primary h-5 w-5" />
                  <a href="https://www.instagram.com/maulinchristian/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:underline">
                    @maulinchristian
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Facebook className="text-primary h-5 w-5" />
                  <a href="https://www.facebook.com/maulin.christian/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:underline">
                    Maulin Christian
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📍</span>
                  <span className="text-sm sm:text-base">Fitness Factory Gym,Rangaipura, Petlad, Gujarat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">🕒</span>
                  <span className="text-sm sm:text-base">Mon-sat: 5AM-9AM |4PM-8PM Sun: closed</span>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-primary">Why Choose Maulin Christian ?</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Personalized training programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Certified and experienced trainers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">State-of-the-art equipment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Nutrition guidance included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Flexible scheduling options</span>
                </li>
              </ul>
            </Card>

            <div className="text-center">
              <Button
                onClick={() => window.open('https://wa.me/917778835090', '_blank')}
                className="btn-primary text-sm sm:text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-glow"
              >
                💬 Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
