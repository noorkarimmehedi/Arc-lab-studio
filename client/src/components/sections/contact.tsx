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
    <section id="contact" className="py-24 px-6 bg-green-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 transform -rotate-1">
            READY TO <span className="text-neubrutalism-accent transform rotate-3 inline-block">LAUNCH</span>?
          </h2>
          <p className="text-xl text-black font-bold max-w-2xl mx-auto uppercase">
            Let's discuss your MVP and get you to market FASTER than you thought possible!
          </p>
        </div>

        <div className="neubrutalism p-12 neubrutalism-shadow-xl bg-white transform rotate-1">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-black text-black mb-2 uppercase">
                  Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="YOUR FULL NAME"
                  className="neubrutalism-input w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-black text-black mb-2 uppercase">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="YOUR@EMAIL.COM"
                  className="neubrutalism-input w-full"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="block text-sm font-black text-black mb-2 uppercase">
                Company
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="YOUR COMPANY NAME"
                className="neubrutalism-input w-full"
              />
            </div>

            <div>
              <Label htmlFor="projectDetails" className="block text-sm font-black text-black mb-2 uppercase">
                Project Details *
              </Label>
              <Textarea
                id="projectDetails"
                rows={6}
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                placeholder="TELL US ABOUT YOUR MVP IDEA, TIMELINE, AND GOALS..."
                className="neubrutalism-input w-full resize-none"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="block text-sm font-black text-black mb-2 uppercase">
                  Budget Range
                </Label>
                <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger className="neubrutalism-input w-full">
                    <SelectValue placeholder="SELECT BUDGET RANGE" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                    <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                    <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                    <SelectItem value="100k+">$100K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="block text-sm font-black text-black mb-2 uppercase">
                  Timeline
                </Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger className="neubrutalism-input w-full">
                    <SelectValue placeholder="SELECT TIMELINE" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP (2 WEEKS)</SelectItem>
                    <SelectItem value="1-month">1 MONTH</SelectItem>
                    <SelectItem value="2-3-months">2-3 MONTHS</SelectItem>
                    <SelectItem value="flexible">FLEXIBLE</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <Button 
                type="submit"
                disabled={submitMutation.isPending}
                className="neubrutalism-purple px-12 py-4 font-black text-black hover:bg-transparent text-lg transform -rotate-1 hover:rotate-0 transition-all"
              >
                {submitMutation.isPending ? "SENDING..." : "SEND PROJECT BRIEF"}
                <Send className="w-5 h-5 inline ml-2" />
              </Button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const colors = ['neubrutalism-yellow', 'neubrutalism-pink', 'neubrutalism-teal'];
            const colorClass = colors[index % colors.length];
            return (
              <div key={index} className={`text-center ${colorClass} p-6 transform ${index === 1 ? 'rotate-2' : index === 2 ? '-rotate-1' : 'rotate-1'}`}>
                <div className="w-12 h-12 neubrutalism-purple rounded-none flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-black text-black mb-2 uppercase">{info.title}</h3>
                <p className="text-black font-bold text-sm uppercase">{info.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
