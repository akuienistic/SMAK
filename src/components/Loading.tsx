import { GraduationCap } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <GraduationCap className="w-16 h-16 text-accent mx-auto" />
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-2 animate-fade-in">
          St. Mary's Academy
        </h1>
        <p className="text-primary-foreground/80 animate-pulse">"Nurturing the Future"</p>
      </div>
    </div>
  );
};

export default Loading;
