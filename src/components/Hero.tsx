import { motion } from "framer-motion"
import { Globe, Code, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-primary-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        {/* Left Side: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-6 h-[80vh] flex items-center justify-center lg:justify-start"
        >
          <div className="relative w-full h-full max-w-[500px]">
            <img 
              src="/profile.jpg" 
              alt="Sakthi Sundaresan Profile" 
              className="w-full h-full object-contain brightness-90 contrast-110"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.className += " bg-slate-900/50 flex items-center justify-center text-slate-700";
                (e.target as HTMLImageElement).style.display = "none";
                const text = document.createElement("span");
                text.innerText = "Add profile.jpg to public/";
                text.className = "text-xs font-mono uppercase tracking-widest";
                (e.target as HTMLImageElement).parentElement!.appendChild(text);
              }}
            />
            {/* Gradient Overlay to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Side: Typography */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 space-y-12 pl-0 lg:pl-12"
        >
          <div className="space-y-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[80px] md:text-[120px] font-black tracking-tighter leading-[0.85] text-white"
            >
              Sakthi
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[60px] md:text-[90px] font-black tracking-tighter leading-[0.85] text-slate-400"
            >
              Sundaresan S.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4 pt-10"
            >
              <div className="h-[1px] w-16 bg-white/30" />
              <p className="font-mono text-sm md:text-lg tracking-[0.2em] text-slate-300">
                <span className="text-white/40 font-serif">⌜</span> I SPEAK FLUENT <span className="text-white font-bold">MACHINE.</span> <span className="text-white/40 font-serif">⌟</span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-10"
          >
            <p className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed font-light border-l border-white/10 pl-6">
              Turning caffeine into compiled code<br />
              and chaos into order.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex gap-4">
                <a href="#projects" className="px-10 py-4 bg-white text-black rounded-sm font-black hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105 uppercase text-sm tracking-widest">
                  Explore Work
                </a>
                <a href="#contact" className="px-10 py-4 border border-white/20 rounded-sm font-black hover:bg-white/10 transition-all duration-300 uppercase text-sm tracking-widest">
                  Let's Talk
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: Code, href: "https://github.com/sakthiii3" },
                  { icon: Globe, href: "https://in.linkedin.com/in/sakthi-sundaresan-s-251343330" },
                  { icon: Mail, href: "mailto:sakthisundaresans@gmail.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="text-slate-500 hover:text-white transition-colors p-2"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Flare */}
      <div className="absolute top-1/2 right-1/4 w-[1px] h-32 bg-gradient-to-b from-transparent via-primary-500/50 to-transparent blur-sm" />
    </section>
  )
}
