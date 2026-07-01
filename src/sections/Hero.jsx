import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Django",
  "MongoDB",
  "Firebase",
  "Flutter",
  "Android",
  "MariaDB",
  "Oracle",
  "Python",
  "Java",
  "JavaScript",
  "Docker",
  "Linux",
  "GitHub",
  "APIs",
  "Cisco",
  "Trello",
  "Microsoft Project",
  "Wear OS",
  "RFID",
  "Sensores",
  "MySQL",
  "CSS",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>


      {/* Partículas Doradas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-70"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background:
                "radial-gradient(circle, #fff4d6 0%, #f3c969 45%, #d4a437 100%)",
              boxShadow: `
                0 0 10px rgba(243, 201, 105, 0.9),
                0 0 20px rgba(212, 164, 55, 0.5)
              `,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Desarrolladora de Software Multiplataforma • Full Stack
              </span>
            </div>

            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Creando experiencias
                <br />
                <span className="text-primary glow-text">
                  digitales modernas
                </span>
                <br />
                con innovación.
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hola, soy Meribeth Yamilet Pérez Espinoza  desarrolladora de
                software multiplataforma apasionada por crear aplicaciones web,
                móviles y soluciones inteligentes utilizando tecnologías
                modernas como React, TypeScript, Django, Flutter, Node.js,
                Docker e inteligencia artificial.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Contáctame
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <a
                href="/Meribeth Yamilet Perez Espinoza-Curriculum Vitae 2025 Español 3.0.pdf"
                download
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Sígueme:
              </span>

              {[
                {
                  icon: Github,
                  href: "https://github.com/Yammery80",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/meribeth-yamilet-perez-espinoza-a52a5b290",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/meribethpereze/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Imagen Perfil */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
                rounded-3xl bg-gradient-to-br
                from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
              />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="../../public/profile-photo.png"
                  alt="Meribeth Yamilet Pérez Espinoza"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Badge disponibilidad */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                    <span className="text-sm font-medium">
                      Disponible para proyectos
                    </span>
                  </div>
                </div>

                {/* Badge experiencia */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">
                    5+
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Años aprendiendo y creando
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tecnologías con las que trabajo
          </p>

          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
              bg-gradient-to-r from-background to-transparent z-10"
            />

            <div
              className="absolute right-0 top-0 bottom-0 w-32
              bg-gradient-to-l from-background to-transparent z-10"
            />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
        animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">
            Desplázate
          </span>

          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};