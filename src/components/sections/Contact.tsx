import { useState } from "react";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Check if Supabase is configured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      
      if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your environment variables.');
      }

      console.log('Submitting contact form...', { 
        name: formData.name.trim(), 
        email: formData.email.trim() 
      });

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }
      });

      console.log('Supabase function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        // Provide more specific error messages
        if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
          throw new Error('Network error. Please check your internet connection and try again.');
        } else if (error.message?.includes('Function not found')) {
          throw new Error('Email service is not available. Please contact support.');
        } else {
          throw new Error(error.message || 'Failed to send message. Please try again.');
        }
      }

      // Check if the response indicates an error
      if (data && typeof data === 'object' && 'error' in data) {
        const errorMessage = data.error as string;
        console.error('Email service error:', errorMessage);
        
        if (errorMessage.includes('not configured') || errorMessage.includes('RESEND_API_KEY')) {
          throw new Error('Email service is not properly configured. Please contact the administrator.');
        } else {
          throw new Error(errorMessage || 'Email service returned an error');
        }
      }

      // Verify success response (either success: true or id present indicates success)
      if (data && typeof data === 'object') {
        const hasSuccess = 'success' in data && data.success === true;
        const hasId = 'id' in data && data.id;
        
        if (!hasSuccess && !hasId) {
          console.warn('Unexpected response format:', data);
          throw new Error('Email service returned an unexpected response');
        }
      }

      console.log('Email sent successfully!', data);

      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Contact form error:", error);
      
      // Provide user-friendly error messages
      let errorMessage = error.message || "Failed to send message. Please try again later.";
      
      // Don't expose technical details to users, but log them
      if (errorMessage.includes('VITE_SUPABASE')) {
        errorMessage = "Service configuration error. Please contact support.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "aluaxiom@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "African Leadership University",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Join the Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of the movement to transform African agriculture through technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Whether you're interested in partnering with us, joining our team, or learning more
              about our initiative, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your interest in Axiom..."
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-gold text-secondary font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
