import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Gestion de entradas y salidas de ciber Papeleria",
    description:
      "Gestor de entradas y salidas de microempresa, para cálculo automatico de sueldos y pagos.",
    image: "../../public/projects/Project1.png",
    tags: ["JavaScript", "CSS", "Firebase"],
    link: "https://entradashakuna.netlify.app/",
    github: "https://github.com/Yammery80/Employee-Time-Tracker/tree/main",
  },
  {
    title: "Gestor de inventario de Microempresa",
    description:
      "Sistema de control de inventario de diferentes sucursales, con gestor de ventas, dashboard, y detección de alimentos próximos a caducar.",
    image: "../../public/projects/Project2.png",
    tags: ["Firebase", "CSS", "Python", "JavaScript"],
    link: "https://miletprojects.netlify.app/",
    github: "https://github.com/Yammery80/miletproductos",
  },
  {
    title: "Pagina de E-commerce de tienda MFP",
    description:
      "Pagina de venta de mascota con pagos por Mercado Pago.",
    image: "../../public/projects/Project3.png",
    tags: ["Javascript", "Claude", "Mercado Pago", "Firebase"],
    link: "https://miletfashionpets.netlify.app/",
    github: "https://github.com/Yammery80/miletfashionpets",
  },
  {
    title: "Gestor de Pedidos Costco",
    description:
      "Página de gestión de pedidos de Costco para checar adeudos, entregas y lista de pedidos",
    image: "../../public/projects/Project4.png",
    tags: ["Java", "CSS", "Firebase"],
    link: "https://costcomiley.netlify.app/",
    github: "https://github.com/Yammery80/costcov1",
  },
  {
    title: "Plataforma de Administración de Portafolio Financiero",
    description:
      "Página de administración de portafolio de inversiones en base a diferentes carteras.",
    image: "../../public/projects/Project5.png",
    tags: ["CSS", "Firebase", "JavaScript"],
    link: "https://invertimx.netlify.app/",
    github: "https://github.com/Yammery80/invertimex",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Mostrar solo 2 al inicio
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Caracteristicas de Trabajo
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proyectos funcionales que
            <span className="font-serif italic font-normal text-white">
              {" "}
              hacen impacto.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Una selección de mi trabajo reciente, desde paginas a microempresas
            a paginas de administración de inventario que resuelven problemas
            en el mundo real.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground 
                    group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {!showAll && (
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <div onClick={() => setShowAll(true)}>
              <AnimatedBorderButton>
                Ver todos los PROYECTOS
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};