import { MapPin, Target, Eye, Heart, Users, Award, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-classroom.jpg";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "We strive for the highest standards in education, equipping students with knowledge and skills for success.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold honesty, transparency, and ethical conduct in all our actions and interactions.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a sense of belonging and mutual respect among students, staff, and families.",
    },
    {
      icon: Award,
      title: "Leadership",
      description: "We develop confident, responsible leaders who will make positive contributions to society.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="SMAK Campus"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-2">About Us</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-4">
              Nurturing the Future
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Learn about our mission, vision, and the values that guide St. Mary's Academy Secondary School - Kwerjik.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="feature-icon mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide quality, affordable secondary education that nurtures the intellectual, moral, and social development of every student. We are committed to creating a safe, inclusive learning environment where students develop critical thinking skills, embrace innovation, and become responsible global citizens.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="feature-icon mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be a leading center of educational excellence, recognized for producing well-rounded graduates who are equipped to excel academically, lead with integrity, and make meaningful contributions to their communities and the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-secondary font-semibold mb-2">Message from the Principal</p>
              <h2 className="section-title text-foreground">Welcome Message</h2>
            </div>
            <div className="bg-card p-8 md:p-10 rounded-xl shadow-lg">
              <div className="prose max-w-none">
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  Dear Parents, Guardians, and Students,
                </p>
                <p className="text-muted-foreground mb-4">
                  On behalf of the entire St. Mary's Academy Secondary School - Kwerjik family, I warmly welcome you to our institution. As a newly established school, we are driven by a passion to provide exceptional education that transforms lives and builds futures.
                </p>
                <p className="text-muted-foreground mb-4">
                  At SMAK, we believe that every child has the potential to excel. Our dedicated team of educators works tirelessly to create a nurturing environment where students can discover their talents, develop their abilities, and achieve their dreams. With modern facilities, innovative teaching methods, and a strong emphasis on STEM education, we are preparing our students for the challenges and opportunities of the 21st century.
                </p>
                <p className="text-muted-foreground mb-4">
                  We are committed to making quality education accessible to all, which is why we offer competitive, pocket-friendly fees without compromising on the standard of education we provide. Whether your child joins us as a day scholar or a boarding student, they will receive the same excellent education and care.
                </p>
                <p className="text-muted-foreground mb-6">
                  I invite you to visit our campus, meet our team, and discover what makes SMAK a special place for learning and growth. Together, we can nurture the future.
                </p>
                <div className="border-t border-border pt-6">
                  <p className="font-heading font-bold text-lg text-foreground">Ivan Arthur Juneday, Makurchiek</p>
                  <p className="text-secondary font-medium">Acting Principal</p>
                  <p className="text-muted-foreground text-sm">St. Mary's Academy Secondary School - Kwerjik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold mb-2">Our Foundation</p>
            <h2 className="section-title text-foreground">Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at St. Mary's Academy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-md card-hover text-center"
              >
                <div className="feature-icon mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-secondary font-semibold mb-2">Our Location</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Find Us in Kwerjik
              </h2>
              <p className="text-muted-foreground mb-6">
                St. Mary's Academy is strategically located in Kwerjik Residential Area, along the Terekeka-Bahr El Ghazal road. Our campus is easily accessible and provides a peaceful, conducive environment for learning.
              </p>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Physical Address</p>
                  <p className="text-muted-foreground">
                    Kwerjik Residential Area<br />
                    Along Terekeka-Bahr El Ghazal Road
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="btn-cta inline-flex"
              >
                Get Directions
              </Link>
            </div>
            <div className="bg-card p-4 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127417.39716379753!2d31.5!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDAuMCJOIDMxwrAzMCcwMC4wIkU!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="SMAK Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
