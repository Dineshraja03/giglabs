import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 border-b-2 border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-mono uppercase tracking-widest mb-4 text-muted-foreground">
                Contact Us
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                Let's Start a Conversation
              </h1>
              <p className="text-xl text-muted-foreground">
                Successful transformation starts with laying the right foundation. 
                Let's talk about your next project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-muted-foreground mb-12">
                  Please send us a message and we will connect with you. 
                  Our team is ready to help you achieve your digital transformation goals.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Head Office</h4>
                      <p className="text-muted-foreground text-sm">Mangalore, India</p>
                      <p className="text-muted-foreground text-sm mt-2">
                        <span className="font-medium text-foreground">Development Center:</span>
                        <br />Mangalore, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a href="tel:+918243539291" className="text-muted-foreground text-sm hover:underline">
                        +91 824 3539291
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary border-2 border-border flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:info@giglabs.tech" className="text-muted-foreground text-sm hover:underline">
                        info@giglabs.tech
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-secondary border-2 border-border p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-2 resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-sm hover:shadow-md transition-shadow">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
