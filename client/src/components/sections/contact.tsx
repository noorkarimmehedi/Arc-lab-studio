import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone, Clock } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectDetails: string;
  budgetRange: string;
  timeline: string;
}

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectDetails: "",
    budgetRange: "",
    timeline: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        projectDetails: "",
        budgetRange: "",
        timeline: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.projectDetails) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and project details are required.",
        variant: "destructive",
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@arc-lab.studio"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+1 (555) 123-4567"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 2 hours"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Ready to <span className="text-cosmic">Launch</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss your MVP and get you to market faster than you thought possible.
          </p>
        </div>

        <div className="glassmorphism rounded-3xl p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-6 py-4 glassmorphism rounded-2xl border-0 focus:ring-2 focus:ring-[hsl(var(--soft-purple))] outline-none smooth-fade"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 glassmorphism rounded-2xl border-0 focus:ring-2 focus:ring-[hsl(var(--soft-purple))] outline-none smooth-fade"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Your company name"
                className="w-full px-6 py-4 glassmorphism rounded-2xl border-0 focus:ring-2 focus:ring-[hsl(var(--soft-purple))] outline-none smooth-fade"
              />
            </div>

            <div>
              <Label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                Project Details *
              </Label>
              <Textarea
                id="projectDetails"
                rows={6}
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                placeholder="Tell us about your MVP idea, timeline, and goals..."
                className="w-full px-6 py-4 glassmorphism rounded-2xl border-0 focus:ring-2 focus:ring-[hsl(var(--soft-purple))] outline-none resize-none smooth-fade"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </Label>
                <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger className="w-full px-6 py-4 glassmorphism rounded-2xl border-0 focus:ring-2 focus:ring-[hsl(var(--soft-purple))] outline-none smooth-fade">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                    <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="100k+">$100k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger className="w-full px-6 py-4 glassmorphism rounded-2xl border-0 focus:ring-2 focus:ring-[hsl(var(--soft-purple))] outline-none smooth-fade">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP (2 weeks)</SelectItem>
                    <SelectItem value="1-month">1 month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button 
                type="submit"
                disabled={submitMutation.isPending}
                className="cosmic-gradient px-12 py-4 rounded-2xl text-white font-medium hover-glow shadow-lg"
              >
                {submitMutation.isPending ? "Sending..." : "Send Project Brief"}
                <Send className="w-5 h-5 inline ml-2" />
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="text-center glassmorphism rounded-2xl p-6">
                <div className="w-12 h-12 cosmic-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
