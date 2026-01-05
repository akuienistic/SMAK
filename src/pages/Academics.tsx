import { BookOpen, Laptop, Users, Trophy, Music, Palette, Beaker, Calculator, Globe, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import scienceLab from "@/assets/science-lab.jpg";

const Academics = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Our rigorous academic program follows the national curriculum with enhanced focus on core subjects. Students receive personalized attention from qualified teachers who are passionate about education.",
      features: ["Mathematics", "English Language", "Sciences", "Social Studies", "Religious Education"],
    },
    {
      icon: Laptop,
      title: "STEM Education",
      description: "State-of-the-art, Wi-Fi enabled laboratories provide hands-on learning experiences in Science, Technology, Engineering, and Mathematics. We prepare students for careers in the modern, technology-driven world.",
      features: ["Computer Science", "Robotics Basics", "Scientific Research", "Tech Projects", "Innovation Hub"],
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "We believe in developing tomorrow's leaders today. Our leadership programs help students build confidence, public speaking skills, and the ability to lead with integrity.",
      features: ["Student Council", "Prefect System", "Debate Club", "Public Speaking", "Community Service"],
    },
    {
      icon: Trophy,
      title: "Mentorship Programs",
      description: "Each student is paired with a mentor who provides guidance, support, and encouragement throughout their academic journey. This personalized approach ensures no student is left behind.",
      features: ["One-on-One Mentoring", "Career Guidance", "Academic Support", "Personal Development", "Goal Setting"],
    },
  ];

  const extracurricular = [
    { icon: Trophy, name: "Sports & Athletics", description: "Football, basketball, athletics, and more" },
    { icon: Music, name: "Music & Drama", description: "Choir, drama club, cultural performances" },
    { icon: Palette, name: "Arts & Crafts", description: "Visual arts, creative projects" },
    { icon: Beaker, name: "Science Club", description: "Experiments, science fairs" },
    { icon: Calculator, name: "Math Olympiad", description: "Competitions, problem-solving" },
    { icon: Globe, name: "Debate & MUN", description: "Public speaking, current affairs" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={scienceLab}
            alt="STEM Education at SMAK"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-2">Academics & Programs</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-4">
              Comprehensive Education for Tomorrow's Leaders
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Discover our innovative curriculum, STEM focus, and holistic development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold mb-2">What We Offer</p>
            <h2 className="section-title text-foreground">Our Academic Programs</h2>
            <p className="section-subtitle">
              A well-rounded education that prepares students for academic success and life beyond school.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg border border-border card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="feature-icon flex-shrink-0">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEM Focus */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold mb-2">Our Focus</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                STEM Education Excellence
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                In today's rapidly evolving world, STEM skills are essential. Our Wi-Fi enabled laboratories provide students with hands-on experience in:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Beaker className="w-6 h-6 text-accent" />
                  <span>Science Labs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-accent" />
                  <span>Computer Labs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-accent" />
                  <span>Mathematics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Laptop className="w-6 h-6 text-accent" />
                  <span>Digital Skills</span>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 p-8 rounded-xl border border-primary-foreground/20">
              <h3 className="font-heading font-bold text-xl mb-4">Why STEM Matters</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span className="text-primary-foreground/90">Prepares students for future careers in technology and innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span className="text-primary-foreground/90">Develops critical thinking and problem-solving skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span className="text-primary-foreground/90">Encourages creativity and innovation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span className="text-primary-foreground/90">Builds foundation for higher education success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold mb-2">Beyond the Classroom</p>
            <h2 className="section-title text-foreground">Talent Development & Extracurriculars</h2>
            <p className="section-subtitle">
              We encourage students to explore their talents and interests through diverse extracurricular activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurricular.map((activity, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md card-hover flex items-start gap-4"
              >
                <div className="feature-icon flex-shrink-0">
                  <activity.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">{activity.name}</h3>
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title text-foreground">
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="section-subtitle">
              Join SMAK and experience quality education that prepares you for success.
            </p>
            <Link to="/admissions" className="btn-cta">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
