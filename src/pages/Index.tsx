import { Link } from "react-router-dom";
import { GraduationCap, Laptop, DollarSign, Shield, ArrowRight, Phone, BookOpen, Users, Star } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-classroom.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import dormitory from "@/assets/dormitory.jpg";
import playground from "@/assets/playground.jpg";

const Index = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Modern Classrooms & Labs",
      description:
        "State-of-the-art facilities equipped with the latest learning resources and Wi-Fi enabled technology.",
    },
    {
      icon: DollarSign,
      title: "Affordable Fees",
      description:
        "Pocket-friendly fees starting from just $80/term for day scholars and $300/term for boarding students.",
    },
    {
      icon: Laptop,
      title: "STEM Education",
      description: "Comprehensive Science, Technology, Engineering, and Mathematics curriculum for future innovators.",
    },
    {
      icon: Shield,
      title: "Safe Boarding",
      description: "Secure, comfortable dormitories with 24/7 supervision and excellent pastoral care.",
    },
  ];

  const stats = [
    { number: "100+", label: "Students Enrolled" },
    { number: "20+", label: "Qualified Teachers" },
    { number: "5", label: "Modern Labs" },
    { number: "$80", label: "Day Scholar/Term" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Students learning at SMAK"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        {/* Admission Badge */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
          <div className="gold-gradient text-school-dark font-bold px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base animate-pulse shadow-lg">
            🎓 ADMISSIONS OPEN!
          </div>
        </div>

        {/* Content */}
        <div className="container-custom lg:mx-0 relative z-10 px-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4 text-lg animate-fade-in">Welcome to</p>
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              St. Mary's Academy <span className="block text-accent">Secondary School</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Kwerjik
            </p>
            <p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              "Nurturing the Future" — Quality education with modern facilities, dedicated teachers, and pocket-friendly
              fees.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/admissions" className="btn-cta">
                <GraduationCap className="w-5 h-5" />
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-primary-outline">
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </div>

            {/* Urgency Banner */}
            <div
              className="mt-8 p-4 bg-accent/20 border border-accent/40 rounded-lg max-w-md animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-primary-foreground font-semibold text-sm">⚡ ENROLL NOW — VACANCIES LIMITED</p>
              <p className="text-primary-foreground/70 text-sm mt-1">2026 Academic Year admissions closing soon!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-8">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent">{stat.number}</p>
                <p className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold mb-2">Why Choose SMAK?</p>
            <h2 className="section-title text-foreground">Excellence in Education</h2>
            <p className="section-subtitle">
              We provide a nurturing environment where every student can thrive academically, socially, and personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-md card-hover">
                <div className="feature-icon mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold mb-2">About Our School</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Welcome to St. Mary's Academy Secondary School – Kwerjik
              </h2>
              <p className="text-muted-foreground mb-4">
                Established in 2025, St. Mary's Academy Secondary School - Kwerjik (SMAK) is a premier mixed day and
                boarding secondary school committed to providing quality education that nurtures the whole child.
              </p>
              <p className="text-muted-foreground mb-6">
                Our modern facilities, experienced teachers, and comprehensive curriculum ensure that every student
                receives the best possible education at an affordable cost. We believe in developing not just academic
                excellence, but also character, leadership, and life skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm font-medium">Academic Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm font-medium">STEM Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm font-medium">Affordable Fees</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={scienceLab}
                alt="Science Laboratory"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <img
                src={dormitory}
                alt="Student Dormitory"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
                loading="lazy"
                decoding="async"
              />
              <img
                src={playground}
                alt="School Playground"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="rounded-xl bg-primary text-primary-foreground p-6 flex flex-col justify-center mt-8">
                <Star className="w-8 h-8 text-accent mb-2" />
                <p className="font-heading font-bold text-xl">Est. 2025</p>
                <p className="text-sm text-primary-foreground/80">Nurturing the Future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold mb-2">Our Programs</p>
            <h2 className="section-title text-primary-foreground">Comprehensive Education</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              From STEM education to leadership development, we offer programs that prepare students for success in the
              modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur p-6 rounded-xl border border-primary-foreground/20">
              <BookOpen className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Academic Excellence</h3>
              <p className="text-primary-foreground/80 text-sm">
                Rigorous curriculum aligned with national standards, taught by qualified and experienced teachers.
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur p-6 rounded-xl border border-primary-foreground/20">
              <Laptop className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">STEM Education</h3>
              <p className="text-primary-foreground/80 text-sm">
                Modern Wi-Fi enabled labs for Science, Technology, Engineering, and Mathematics learning.
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur p-6 rounded-xl border border-primary-foreground/20">
              <Users className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Leadership Development</h3>
              <p className="text-primary-foreground/80 text-sm">
                Student leadership programs, mentorship, and character building activities.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Explore All Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-foreground">Ready to Join the SMAK Family?</h2>
            <p className="section-subtitle">
              Give your child the gift of quality education. Admissions are now open for the 2026 academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions" className="btn-cta">
                <GraduationCap className="w-5 h-5" />
                Apply for Admission
              </Link>
              <a
                href="tel:0924879393"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: 0924879393
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
