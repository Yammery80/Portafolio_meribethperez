import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpio",
    description:
      "Escribiendo código mantenible y escalable que perdure con el tiempo.",
  },
  {
    icon: Rocket,
    title: "Rendimiento",
    description:
      "Optimizando la velocidad y ofreciendo experiencias de usuario ultrarrápidas.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Trabajando de cerca con equipos para convertir ideas en realidad.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Manteniéndome al día con las últimas tecnologías y mejores prácticas.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna Izquierda */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Acerca de mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construyendo el futuro,
              <span className="font-serif italic font-normal text-white">
                {" "}
                un componente a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy un ingeniera de software apasionada con más de 5 años de
                experiencia creando productos digitales que marcan la diferencia.
                Mi camino comenzó con la curiosidad de entender cómo funcionan
                las cosas en la web, y evolucionó hasta convertirse en una sólida
                experiencia en tecnologías frontend, backend y multiplataformas modernas.
              </p>

              <p>
                Me especializa en Python, MongoDB y JavaScript, desarrollando
                desde landing pages elegantes hasta aplicaciones empresariales
                complejas. Mi enfoque combina excelencia técnica con una gran
                atención al diseño y la experiencia de usuario elegante.
              </p>

              <p>
                Cuando no estoy programando, me encontrarás explorando nuevas
                tecnologías, contribuyendo a proyectos de código abierto o
                compartiendo conocimientos con la comunidad de desarrolladores.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi misión es crear experiencias digitales que no solo sean
                funcionales, sino también realmente agradables: productos que
                los usuarios amen utilizar y los desarrolladores disfruten
                mantener."
              </p>
            </div>
          </div>

          {/* Columna Derecha - Destacados */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};