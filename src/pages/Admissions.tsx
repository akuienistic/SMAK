import { useState } from "react";
import { GraduationCap, Phone, Mail, FileText, Bus, CheckCircle2, DollarSign } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    interest: "day",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inquiry Submitted Successfully!",
      description: "Thank you for your interest in SMAK. We will contact you shortly.",
    });

    setFormData({
      parentName: "",
      studentName: "",
      phone: "",
      email: "",
      interest: "day",
      message: "",
    });
    setIsSubmitting(false);
  };

  const requiredDocuments = [
    "Completed Application Form",
    "Birth Certificate (Original & Copy)",
    "Previous School Records / Report Cards",
    "Transfer Letter (if applicable)",
    "4 Passport-size Photographs",
    "Medical Certificate",
    "Parent/Guardian National ID Copy",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block gold-gradient text-school-dark font-bold px-6 py-2 rounded-full mb-6 animate-pulse">
              🎓 ADMISSIONS OPEN FOR 2026 ACADEMIC YEAR
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-4">
              Join the SMAK Family
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-6">
              Quality education with pocket-friendly fees. Limited vacancies available!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0924879393" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                <Phone className="w-5 h-5" />
                Call: 0924879393
              </a>
              <a href="tel:0988181818" className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/30 transition-colors">
                <Phone className="w-5 h-5" />
                0988181818
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold mb-2">Affordable Excellence</p>
            <h2 className="section-title text-foreground">Fee Structure</h2>
            <p className="section-subtitle">
              Pocket-friendly fees for all — Quality education shouldn't break the bank.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Day Scholar */}
              <div className="bg-card rounded-xl shadow-lg overflow-hidden border-2 border-border card-hover">
                <div className="bg-secondary text-secondary-foreground p-6 text-center">
                  <h3 className="font-heading text-2xl font-bold mb-2">Day Scholar</h3>
                  <p className="text-secondary-foreground/80">S.1 - S.4</p>
                </div>
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <DollarSign className="w-10 h-10 text-accent" />
                    <span className="font-heading text-5xl font-bold text-foreground">80</span>
                  </div>
                  <p className="text-muted-foreground mb-6">Per Term</p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Full academic curriculum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Access to all facilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>Extracurricular activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>School bus available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Boarding */}
              <div className="bg-card rounded-xl shadow-lg overflow-hidden border-2 border-primary card-hover relative">
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </div>
                <div className="bg-primary text-primary-foreground p-6 text-center">
                  <h3 className="font-heading text-2xl font-bold mb-2">Boarding</h3>
                  <p className="text-primary-foreground/80">S.1 - S.4</p>
                </div>
                <div className="p-8 text-center">
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <DollarSign className="w-10 h-10 text-accent" />
                    <span className="font-heading text-5xl font-bold text-foreground">300</span>
                  </div>
                  <p className="text-muted-foreground mb-6">Per Term</p>
                  <ul className="text-left space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Everything in Day Scholar</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Safe accommodation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>3 meals daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>24/7 supervision</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Evening study hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation Note */}
            <div className="mt-8 bg-card p-6 rounded-xl border border-border flex items-start gap-4">
              <Bus className="w-8 h-8 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">School Bus Transportation</h4>
                <p className="text-muted-foreground">
                  Day scholars can take advantage of our safe and reliable school bus service. Routes cover major residential areas around Kwerjik. Contact us for bus schedule and pickup points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-secondary font-semibold mb-2">Get Started</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Admission Inquiry Form
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our admissions team will contact you within 24 hours to guide you through the enrollment process.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input
                      id="studentName"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Enter student's name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., 0912345678"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Program Interest *</Label>
                  <RadioGroup
                    value={formData.interest}
                    onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="day" id="day" />
                      <Label htmlFor="day" className="cursor-pointer">Day Scholar ($80/term)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="boarding" id="boarding" />
                      <Label htmlFor="boarding" className="cursor-pointer">Boarding ($300/term)</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any questions or additional information..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full btn-cta" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <GraduationCap className="w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Required Documents */}
            <div>
              <div className="bg-muted p-8 rounded-xl sticky top-32">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h3 className="font-heading font-bold text-xl">Required Documents</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Please prepare the following documents for registration:
                </p>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-heading font-bold mb-4">Need Help?</h4>
                  <div className="space-y-3">
                    <a href="tel:0924879393" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5" />
                      0924879393
                    </a>
                    <a href="tel:0988181818" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5" />
                      0988181818
                    </a>
                    <a href="mailto:admissions@smak.edu" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5" />
                      admissions@smak.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
