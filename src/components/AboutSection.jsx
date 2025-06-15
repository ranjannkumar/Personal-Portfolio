import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Crafting Scalable Solutions with Code</h3>

          <p className="text-muted-foreground">
            Hello, I'm Ranjan Kumar, a recent graduate from IIT Guwahati, 
            where I completed my B.Tech in Chemical Science and Technology. 
            I’m a passionate Full-Stack Developer with hands-on experience in building scalable projects over the last two years.
            I have worked on a range of impactful projects—from a decentralized file storage system to real-time virtual deal room and food delivery applications.
          </p>

          <p className="text-muted-foreground">
            I have successfully completed internship at CloudGrep, where I Developed RESTful APIs using Next.js, Node.js, and MongoDB, focusing on efficient query optimization, error handling,
and secure data operations.
 Implemented JWT authentication and role-based access control to enhance application security and user management.
 Achieved a 25% reduction in page load times through server-side caching and asynchronous data handling with Promises.
Boosted frontend performance by 35% using React Hooks, lazy loading, and memoization.
           </p>

          <p className="text-muted-foreground">
            When I'm not coding, I enjoy watching movies,and playing sports like cricket and carrom. 
            In addition to that I also developed organizational and teamwork skills through my role as Content Head at Right and Responsibility Club,IIT Guwahati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a 
                href="projects/CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
