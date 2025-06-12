import { useState } from 'react';
import { cn } from '@/lib/utils';

// Ícones de Habilidades
import { VscVscode } from "react-icons/vsc";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { RiNotionFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaHtml5, FaReact, FaAngular, FaSass, FaFigma, FaNodeJs } from "react-icons/fa6";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt, FaNpm } from "react-icons/fa";
import { SiVite, SiWebpack } from "react-icons/si";





const skills = [
  { name: "HTML", level: 95, category: "frontend", icon: FaHtml5, color: "#e34c26"  },
  { name: "CSS", level: 95, category: "frontend", icon: IoLogoCss3, color: "#1572B6"  },
  { name: "JavaScript", level: 90, category: "frontend", icon: IoLogoJavascript,  color: "#f7df1e" },
  { name: "React", level: 80, category: "frontend", icon: FaReact, color: "#61dafb"  },
  { name: "Tailwind CSS", level: 75, category: "frontend", icon: RiTailwindCssFill, color: "#38bdf8"  },
  { name: "Angular", level: 70, category: "frontend", icon: FaAngular, color: "#dd0031"  },
  { name: "Next.js", level: 60, category: "frontend", icon: RiNextjsFill, color: "#FFF"  },
  { name: "Sass", level: 60, category: "frontend", icon: FaSass, color: "#cf649a"  },

  { name: "Node.js", level: 80, category: "backend", icon: FaNodeJs, color: "#68a063"  },
  { name: "PostgreSQL", level: 70, category: "backend", icon: DiPostgresql, color: "#336791"  },

  { name: "Git/GitHub", level: 90, category: "Ferramentas", icon: FaGitAlt, color: "#f1502f"  },
  { name: "VS Code", level: 90, category: "Ferramentas", icon: VscVscode, color: "#007acc" },
  { name: "npm", level: 90, category: "Ferramentas", icon: FaNpm, color: "#cb3837"  },
  { name: "Vite", level: 80, category: "Ferramentas", icon: SiVite, color: "#646CFF"  },
  { name: "Figma", level: 80, category: "Ferramentas", icon: FaFigma, color: "#a259ff"  },
  { name: "Notion", level: 75, category: "Ferramentas", icon: RiNotionFill, color: "#FFF" },
  { name: "Webpack", level: 70, category: "Ferramentas", icon: SiWebpack, color: "#8ed6fb"  },

];

const categories = ["Todas", "frontend", "backend", "Ferramentas"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "Todas" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Minhas <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bd-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex justify-between  gap-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <div> {skill.icon && <skill.icon 
                    style={{ color: skill.color }}
                    className="text-xl w-10 h-6 mt-1" />}</div>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
