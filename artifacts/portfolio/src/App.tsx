import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Github, Linkedin, Mail, Send, Terminal, Cpu, Database, Code2, BrainCircuit, Globe, Server, Layers } from "lucide-react";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress, SiHtml5, SiCss, SiGithub, SiPython, SiTensorflow } from "react-icons/si";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3 glass-card border-b border-white/5" : "py-6 bg-transparent"}`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group" data-testid="link-home">
          <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all">
            <span className="text-primary font-mono text-sm font-bold">VH</span>
          </div>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
              data-testid={`link-nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </a>
          ))}
          <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground ml-4 transition-all">
            <a href="#contact" data-testid="button-nav-contact">Initiate Contact</a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src="/hero-bg.png" alt="Tech Lab Background" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background"></div>
        <div className="absolute inset-0 tech-grid-bg opacity-30"></div>
      </motion.div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center mb-6 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium font-mono tracking-wider shadow-[0_0_15px_rgba(var(--primary),0.2)]">
            <Terminal className="w-3 h-3 mr-2" />
            <span>SYS.INIT: R.M Vinura Hirushan</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Engineering<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-primary">Intelligent</span><br />
            Systems.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light border-l-2 border-primary/50 pl-4">
            Software Engineering Undergraduate | Full Stack Developer | Aspiring AI Engineer
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all hover:shadow-[0_0_30px_rgba(var(--primary),0.6)]">
              <a href="#projects" data-testid="button-hero-projects">Inspect Architecture</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm">
              <a href="https://github.com/vinura-hirushan" target="_blank" rel="noreferrer" data-testid="button-hero-github">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm">
              <a href="https://linkedin.com/in/vinura-hirushan" target="_blank" rel="noreferrer" data-testid="button-hero-linkedin">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll to initialize</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ title, subtitle, number }: { title: string, subtitle?: string, number: string }) {
  return (
    <div className="mb-20 relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute -top-10 -left-6 text-8xl font-black text-white/5 select-none pointer-events-none hidden md:block"
      >
        {number}
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl md:text-5xl font-bold text-white flex items-center gap-6 relative z-10"
      >
        <span className="text-primary font-mono text-lg md:text-xl font-normal">{number}.</span>
        {title}
        <span className="h-px bg-gradient-to-r from-primary/50 to-transparent flex-grow max-w-[200px] ml-4 hidden sm:block"></span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mt-6 md:ml-[4.5rem] max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading number="01" title="System Profile" subtitle="The core components of my professional identity and technical background." />
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a 23-year-old Software Engineering undergraduate at Saegis Campus, currently deployed as a Full Stack Developer Intern. I architect and build robust, scalable applications with a primary focus on the MERN stack ecosystem.
            </p>
            <p>
              My ultimate operational objective is to become an AI/ML Engineer. I am deeply interested in constructing intelligent, self-optimizing systems that solve complex, real-world problems. Every line of code I write is a calculated step toward that paradigm.
            </p>
            <p>
              I value precision, elegant system architecture, and continuous technical evolution. When I am not building web applications, I am studying machine learning algorithms, training neural networks, and exploring the frontiers of artificial intelligence.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-card p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-xl font-semibold text-white mb-8 font-mono flex items-center gap-2">
              <Terminal className="w-5 h-5 text-primary" />
              Runtime config
            </h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Code2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <strong className="block text-white font-medium mb-1">Status</strong>
                  <span className="text-muted-foreground text-sm">Full Stack Developer Intern</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <Server className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <strong className="block text-white font-medium mb-1">Base Location</strong>
                  <span className="text-muted-foreground text-sm">Colombo, Sri Lanka</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <BrainCircuit className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <strong className="block text-white font-medium mb-1">Focus Vector</strong>
                  <span className="text-muted-foreground text-sm">AI / Machine Learning Integration</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="py-32 relative bg-card/20 border-y border-white/5">
      <div className="absolute inset-0 tech-grid-bg opacity-[0.15]"></div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionHeading number="02" title="Engineering Philosophy" subtitle="The principles that guide my architectural decisions and code implementation." />
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Precision & Performance",
              desc: "Code should not just work; it should be optimized for minimal resource consumption and maximum execution speed."
            },
            {
              icon: Layers,
              title: "Scalable Architecture",
              desc: "Designing modular, decoupled systems that can expand seamlessly as user load and feature requirements increase."
            },
            {
              icon: BrainCircuit,
              title: "Intelligent Design",
              desc: "Integrating automated decision-making and AI concepts even in standard applications to provide smarter user experiences."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading number="03" title="Academic Training" />
        
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/10 md:hidden"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative md:w-1/2 md:pr-16 md:text-right ml-auto md:ml-0 mb-16"
          >
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full left-[-29px] md:-right-2 md:left-auto top-1.5 shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10"></div>
            <div className="glass-card p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-colors inline-block w-full">
              <span className="text-primary font-mono text-sm mb-2 block">2020 — Present</span>
              <h3 className="text-2xl font-bold text-white mb-2">BSc (Hons) Software Engineering</h3>
              <h4 className="text-lg text-gray-400 mb-6">Saegis Campus</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Comprehensive study of software engineering principles, algorithms, database architecture, and advanced programming paradigms. Consistently maintaining high academic standing while pursuing independent full-stack projects.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative md:w-1/2 md:pl-16 ml-auto md:ml-auto mb-16"
          >
            <div className="absolute w-4 h-4 bg-background border-2 border-white/30 rounded-full left-[-29px] md:-left-2 top-1.5 z-10"></div>
            <div className="glass-card p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-colors inline-block w-full">
              <span className="text-gray-400 font-mono text-sm mb-2 block">Ongoing</span>
              <h3 className="text-2xl font-bold text-white mb-2">AI & Machine Learning Studies</h3>
              <h4 className="text-lg text-gray-400 mb-6">Independent Research</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Self-directed learning vector focused on neural networks, deep learning frameworks (TensorFlow/PyTorch), and practical implementation of AI models in web applications. Exploring NLP and predictive analytics.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-card/20 border-y border-white/5">
      <div className="absolute inset-0 tech-grid-bg opacity-[0.15]"></div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionHeading number="04" title="Operational History" />
        
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/20"></div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">Full Stack Developer Intern</h3>
                  <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-mono border border-primary/20">CURRENT</span>
                </div>
                <h4 className="text-lg text-gray-400">Industry Deployment</h4>
              </div>
              <span className="text-primary/80 font-mono text-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10 h-fit">Present</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Developing robust MERN stack applications, optimizing complex database queries, and implementing highly responsive UI components. Collaborating directly with senior engineering teams to architect scalable solutions, participating in code reviews, and ensuring deployment of high-quality, production-ready code.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "API Design", "System Architecture"].map(tech => (
                <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const skillsList = [
  { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-yellow-400" },
  { name: "React", icon: SiReact, color: "group-hover:text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "group-hover:text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "group-hover:text-gray-300" },
  { name: "HTML5", icon: SiHtml5, color: "group-hover:text-orange-500" },
  { name: "CSS3", icon: SiCss, color: "group-hover:text-blue-500" },
  { name: "GitHub", icon: SiGithub, color: "group-hover:text-white" },
];

function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading number="05" title="Technical Arsenal" subtitle="The frameworks, languages, and tools utilized in my engineering stack." />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 rounded-xl flex flex-col items-center justify-center gap-5 border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:bg-white/5"
            >
              <skill.icon className={`w-12 h-12 text-gray-500 ${skill.color} transition-colors duration-300`} />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 glass-card rounded-xl border border-primary/20 relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <BrainCircuit className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Current Learning Vector</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Actively expanding my knowledge base into Artificial Intelligence and Machine Learning. Focusing on building intelligent systems that can process data, recognize patterns, and automate complex decision-making.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
              <div className="flex items-center gap-3 px-5 py-3 bg-black/40 rounded-lg border border-white/10">
                <SiPython className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-mono text-gray-300">Python</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-black/40 rounded-lg border border-white/10">
                <SiTensorflow className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-mono text-gray-300">TensorFlow Basics</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const projectsList = [
  {
    title: "DevConnect",
    description: "A full-stack developer networking platform featuring real-time chat, collaborative project spaces, and advanced user matching algorithms based on skill profiles.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/vinura-hirushan",
    demo: "#",
    icon: Globe
  },
  {
    title: "SmartTask AI",
    description: "An intelligent project management tool that automatically prioritizes tasks based on deadlines, dependencies, and historical work patterns using natural language processing.",
    tech: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/vinura-hirushan",
    demo: "#",
    icon: BrainCircuit
  },
  {
    title: "ShopFlow",
    description: "A comprehensive e-commerce platform with seamless payment integration, real-time inventory synchronization, and a highly detailed analytics dashboard for administrators.",
    tech: ["MERN Stack", "Stripe", "Redux", "JWT Auth"],
    github: "https://github.com/vinura-hirushan",
    demo: "#",
    icon: Database
  }
];

function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-card/20 border-y border-white/5">
      <div className="absolute inset-0 tech-grid-bg opacity-[0.15]"></div>
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionHeading number="06" title="Deployed Systems" subtitle="A selection of full-stack applications I have architected, developed, and shipped." />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden group hover:-translate-y-2 hover:border-primary/40 transition-all duration-500 flex flex-col h-full shadow-lg"
            >
              <div className="h-56 bg-black/40 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 tech-grid-bg opacity-40 mix-blend-overlay"></div>
                <div className="absolute w-full h-full bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <project.icon className="w-20 h-20 text-white/5 group-hover:text-primary/20 transition-colors duration-500 z-0 absolute" />
                <h3 className="text-3xl font-black text-white/40 group-hover:text-white transition-colors duration-500 z-20 tracking-tight">{project.title}</h3>
              </div>
              <div className="p-8 flex flex-col flex-grow relative bg-card/40">
                <h4 className="text-xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 text-gray-300 font-mono border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent border-white/10 hover:bg-white/10 hover:border-white/30 text-white">
                    <a href={project.github} target="_blank" rel="noreferrer" data-testid={`btn-source-${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                      <Github className="w-4 h-4 mr-2" /> Source
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1 bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/30 transition-all">
                    <a href={project.demo} target="_blank" rel="noreferrer" data-testid={`btn-demo-${project.title.toLowerCase().replace(/\s/g, '-')}`}>
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading number="07" title="Establish Connection" subtitle="Currently open to new operational opportunities, internships, and challenging projects." />
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <motion.a 
              href="mailto:vinura.hirushan@email.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 block group"
              data-testid="contact-email"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-primary/20">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Secure Comms</h4>
              <span className="text-muted-foreground group-hover:text-white transition-colors block break-all font-mono text-sm">
                vinura.hirushan@email.com
              </span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/vinura-hirushan" 
              target="_blank" 
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 block group"
              data-testid="contact-linkedin"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 border border-primary/20">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Professional Network</h4>
              <span className="text-muted-foreground group-hover:text-white transition-colors block break-all font-mono text-sm">
                linkedin.com/in/vinura-hirushan
              </span>
            </motion.a>

            <motion.a 
              href="https://github.com/vinura-hirushan" 
              target="_blank" 
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 block group"
              data-testid="contact-github"
            >
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 border border-white/10">
                <Github className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Code Repository</h4>
              <span className="text-muted-foreground group-hover:text-white transition-colors block break-all font-mono text-sm">
                github.com/vinura-hirushan
              </span>
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>
            <h3 className="text-3xl font-bold text-white mb-8">Transmit Data Payload</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 font-mono tracking-wider">01. IDENTIFIER</label>
                  <Input id="name" placeholder="John Doe" className="bg-black/50 border-white/10 focus-visible:ring-primary/50 focus-visible:border-primary/50 text-white h-12" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 font-mono tracking-wider">02. RETURN_ADDRESS</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-black/50 border-white/10 focus-visible:ring-primary/50 focus-visible:border-primary/50 text-white h-12" />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400 font-mono tracking-wider">03. SUBJECT_VECTOR</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-black/50 border-white/10 focus-visible:ring-primary/50 focus-visible:border-primary/50 text-white h-12" />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 font-mono tracking-wider">04. PAYLOAD</label>
                <Textarea id="message" placeholder="Message content..." className="min-h-[180px] bg-black/50 border-white/10 focus-visible:ring-primary/50 focus-visible:border-primary/50 text-white resize-none p-4" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-7 rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all">
                <Send className="w-5 h-5 mr-3" /> INITIATE SECURE TRANSFER
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-bg opacity-10"></div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center border border-primary/50">
            <span className="text-primary font-mono text-xs font-bold">VH</span>
          </div>
          <span className="text-white font-bold tracking-wider">R.M VINURA HIRUSHAN</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-muted-foreground text-sm font-mono">
            SYS.STATUS: ONLINE | &copy; {new Date().getFullYear()}
          </p>
          <p className="text-gray-600 text-xs">
            Designed & Architected for the Future
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-[#030712] text-foreground antialiased selection:bg-primary/30 selection:text-white relative font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}