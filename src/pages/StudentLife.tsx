import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import scienceLab from "@/assets/science-lab.jpg";
import dormitory from "@/assets/dormitory.jpg";
import playground from "@/assets/playground.jpg";
import schoolBus from "@/assets/school-bus.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";

const StudentLife = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroClassroom,
      title: "Modern Classrooms",
      description: "Spacious, well-lit classrooms equipped with modern teaching aids for optimal learning.",
    },
    {
      src: scienceLab,
      title: "Science & Computer Labs",
      description: "State-of-the-art laboratories with Wi-Fi connectivity for STEM education excellence.",
    },
    {
      src: dormitory,
      title: "Safe Dormitories",
      description: "Clean, comfortable, and secure accommodation for our boarding students.",
    },
    {
      src: playground,
      title: "Sports Facilities",
      description: "Football pitch, basketball court, and athletics track for physical development.",
    },
    {
      src: schoolBus,
      title: "School Transportation",
      description: "Safe and reliable school bus service for day scholars across Kwerjik area.",
    },
  ];

  const boardingLife = [
    "Comfortable dormitories with personal storage",
    "Three nutritious meals daily",
    "24/7 security and supervision",
    "Evening prep/study hours",
    "Weekend recreational activities",
    "Pastoral care and counseling",
    "Sick bay with first aid facilities",
    "Clean water and sanitation",
  ];

  const daySchoolLife = [
    "School bus pickup from major routes",
    "Full access to all facilities",
    "Lunch available on campus",
    "After-school activities",
    "Safe drop-off zones",
    "Parent communication updates",
    "Flexible arrangements",
    "Extracurricular participation",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src={playground}
            alt="Student Life at SMAK"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-2">Student Life</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-bold mb-4">
              Life at SMAK
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Experience a vibrant community where students learn, grow, and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold mb-2">Our Facilities</p>
            <h2 className="section-title text-foreground">Photo Gallery</h2>
            <p className="section-subtitle">
              Take a visual tour of our modern campus and facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer card-hover"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-heading font-bold text-lg">{image.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Day vs Boarding */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-secondary font-semibold mb-2">Choose Your Path</p>
            <h2 className="section-title text-foreground">Day Scholar vs Boarding</h2>
            <p className="section-subtitle">
              Both options offer the full SMAK experience with access to all academic programs and facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Boarding Life */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <img
                src={dormitory}
                alt="Boarding Life"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-2xl mb-4">Boarding Life</h3>
                <p className="text-muted-foreground mb-4">
                  Our boarding program provides a home away from home. Students live in a safe, supervised environment with structured study times and plenty of opportunities for personal growth.
                </p>
                <ul className="space-y-2">
                  {boardingLife.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Day School Life */}
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <img
                src={schoolBus}
                alt="Day Scholar Life"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-2xl mb-4">Day Scholar Life</h3>
                <p className="text-muted-foreground mb-4">
                  Day scholars enjoy the full academic experience while returning home each evening. Our school bus service makes commuting convenient and safe.
                </p>
                <ul className="space-y-2">
                  {daySchoolLife.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience SMAK Life?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our vibrant community and give your child the best secondary education experience.
          </p>
          <Link to="/admissions" className="btn-cta">
            Apply for Admission
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLife;
