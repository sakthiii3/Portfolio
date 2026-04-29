import { motion } from "framer-motion"

const technologies = [
  { name: "Python", slug: "python" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "C", slug: "c" },
  { name: "C++", slug: "cplusplus" },
  { name: "Java", slug: "openjdk" },
  { name: "MySQL", slug: "mysql" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Git", slug: "git" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "Raspberry Pi", slug: "raspberrypi" },
  { name: "Linux", slug: "linux" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Spring Boot", slug: "springboot" },
  { name: "Express", slug: "express" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flask", slug: "flask" },
  { name: "MongoDB", slug: "mongodb" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            The Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 uppercase tracking-[0.3em] text-sm font-bold"
          >
            CORE TECHNOLOGIES
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ 
                y: -5,
                backgroundColor: "rgba(30, 41, 59, 0.5)",
                borderColor: "rgba(56, 189, 248, 0.5)"
              }}
              className="aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/30 border border-slate-800 transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 mb-4 transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}/ffffff`} 
                  alt={tech.name}
                  className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to non-white if white fails or just show text
                    (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/${tech.slug}`;
                  }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-500 group-hover:text-white transition-colors duration-300 uppercase tracking-wider text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
