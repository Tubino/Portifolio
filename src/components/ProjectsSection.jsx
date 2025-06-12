import { ExternalLink, Github, ArrowRight } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Projeto Favoritos do Github",
        description: "Página web interativa que permite buscar e adicionar usuários do GitHub à sua lista de favoritos.",
        image: "/projects/Github.png",
        tags: ["JS", "HTML", "CSS", "Git"],
        demoUrl: "#",
        githubUrl: "https://github.com/Tubino/Github-Favorites",
    },

    {
        id: 2,
        title: "Projeto Lucky Draw",
        description: "Aplicação responsiva de um sorteador de números onde o usuário seleciona quantos números quer sortear.",
        image: "/projects/lucky_draw.png",
        tags: ["JS", "HTML", "CSS", "Git"],
        demoUrl: "https://lucky-draw-2025.netlify.app/",
        githubUrl: "https://github.com/Tubino/Lucky-Draw", 
    },

    {
        id: 3,
        title: "Project Lista de compras",
        description: "Site responsivo onde os usuários podem gerenciar itens adicionando e removendo-os.",
        image: "/projects/shopping_list.png",
        tags: ["JS", "HTML", "CSS", "Figma"],
        demoUrl: "https://tubino.github.io/Shopping-list/",
        githubUrl: "https://github.com/Tubino/Shopping-list",
    }
]

export const ProjectsSection = () => {
    return (
        <section className="py-24 px-4 relative" id="projects">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    <span className="text-primary">Projetos</span> em destaque
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aqui estão alguns dos meus projetos mais recentes. Cada projeto demonstra minhas habilidades em desenvolvimento web e minha capacidade em resolução de problemas.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="overflow-hidden h-44">
                                <img src={project.image} alt={project.title} className="w-full h-[80] object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 border text-sm font-medium rounded-full bg-primary/20 text-secondary-foreground opacity-90">
                                            {tag}
                                        </span>
                                    ))}
                                </div>     

                                <h3 className="text-xl font-semibold mb-3 mt-4">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 mt-4 mx-w-1 text-left">{project.description}</p>    

                                
                                    <div className="flex space-x-3 mt-7 justify-center gap-10">
                                        <a 
                                            href={project.demoUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                          <ExternalLink size={22}/>  
                                        </a>

                                        <a 
                                            href={project.githubUrl} 
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                          <Github size={22}/>  
                                        </a>
                                    </div>
                                   
                            </div>

                                 
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        href="https://github.com/Tubino"
                        target="_blank"
                    >
                        Veja meu GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>)
}