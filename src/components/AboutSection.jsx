import { Code, User, Briefcase } from 'lucide-react';



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md-text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Desenvolvedor Web em Formação & Criador de Soluções Digitais
                        </h3>

                        <p className="text-muted-foreground">
                            Há 2 anos venho mergulhando no universo do desenvolvimento web através do curso Fullstack da Rocketseat, 
                            onde me especializo na criação de aplicações acessíveis, responsivas e performáticas com tecnologias modernas.
                        </p>

                        <p className="text-muted-foreground">
                            Sou apaixonado por transformar ideias em soluções digitais elegantes. 
                            Estou sempre aprendendo novas ferramentas e técnicas para acompanhar a 
                            evolução constante do ecossistema web e entregar experiências que realmente façam a diferença.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Entre em contato
                            </a>

                            <a href="/cv/Lucas_Tubino_cv.pdf" target="_blank" rel="noopener noreferrer" className="
                                    px-6 py-2 rounded-full border-2 border-violet-400 text-violet-400 font-semibold
                                    transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
                                    hover:scale-105 active:scale-95">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="cosmic-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className='h-6 w-6 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Desenvolvimento Web</h4>
                                    <p className='text-muted-foreground'>
                                        Criação de sites e aplicações web responsivas com frameworks modernos.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cosmic-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className='h-6 w-6 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Design UI/UX</h4>
                                    <p className='text-muted-foreground'>
                                        Desenvolvimento de interfaces intuitivas e experiências de usuário fluídas.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cosmic-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className='h-6 w-6 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Gestão de Projetos</h4>
                                    <p className='text-muted-foreground'>
                                        Participação em projetos do início ao fim, com foco em organização e metodologias ágeis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
    
}