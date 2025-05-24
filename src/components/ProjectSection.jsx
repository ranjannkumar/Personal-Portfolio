import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id:1,
    title: "Distributed File Storage System",
    description: "A decentralized file storage system in go using a peer-to-peer (P2P) network architecture.",
    image: "projects/project1.jpg",
    tags:["golang"],
    githubUrl: "https://github.com/ranjannkumar/Distributed-File-Storage",
  },
  {
    id:2,
    title: "Food Delivery Application",
    description: "a full-stack Food Delivery Application that allows users to browse menus, add items to their cart, place orders, and make payments.",
    image: "projects/project2.jpg",
    tags:["React","express","Node.js","Mongoose","JWT","Stripe"],
    githubUrl: "https://github.com/ranjannkumar/Food-Delivery-App",
  },

   {
    id:3,
    title: "Virtual Deal Room",
    description: "Business transactions platform where buyers and sellers can negotiate deals in real-time and securely finalize transactions.",
    image: "projects/project3.jpg",
    tags:["React","express","Node.js","Mongoose","JWT","Stripe","Redis"],
    githubUrl: "https://github.com/ranjannkumar/Virtual-Deal-Room",
  },

   {
    id:4,
    title: "Real-time Chat Application",
    description: "A Chat Application that allows users to send instant messages, share files, and communicate in private or group chats using WebSockets.",
    image: "projects/project4.jpg",
    tags:["React","express","Node.js","MongoDB","JWT","Socket.IO"],
    githubUrl: "https://github.com/ranjannkumar/Chat-Application",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore a selection of my recent projects, 
          each thoughtfully engineered with a focus on clean architecture, 
           optimal performance, and seamless user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag)=>(
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                  </div>
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div>
          <a
           className="cosmic-button w-fit flex items-center mx-auto gap-2"
           target="_blank"
           href="https://github.com/ranjannkumar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
