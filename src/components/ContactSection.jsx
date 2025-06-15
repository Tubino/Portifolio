import { Mail, Phone, MapPin, Linkedin, Instagram, Github, Facebook, Send } from "lucide-react";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useState, useRef } from "react";
import { sendForm } from '@emailjs/browser';


export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

    // Configuração do emailjs
    const SERVICE_ID = "service_o3xnugg";
    const TEMPLATE_ID = "template_9ozp9ae";
    const PUBLIC_KEY = "KXMBy1XAurkpUHvry";

    const handleSubmit = (e) => {
        e.preventDefault();

        sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Sua mensagem foi enviada!",
                description: "Obrigado por sua mensagem, Entrarei em contato o mais breve possível."
            })
            formRef.current.reset();
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-secondary/30">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Entre em <span className="text-primary"> contato </span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Estou sempre aberto a novas oportunidades e colaborações. Se você tem alguma dúvida, sugestão ou apenas quer bater um papo, sinta-se à vontade para entrar em contato comigo!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-2-xl font-semibold mb-6"> Informações de Contato</h3>

                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Email</h4>
                                        <a 
                                            href="mailto:lukastubino@gmail.com" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            lukastubino@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Telefone</h4>
                                        <a 
                                            href="tel:+5551999820072" 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +55 (51) 99982-0072
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Localização</h4>
                                        <a 
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Porto Alegre, RS, Brasil
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 ">
                                <h4 className="font-medium mb-4"> Conecte-se comigo</h4>
                                <div className="flex space-x-8 justify-center">
                                    <a href="https://www.linkedin.com/in/lucas-machado-tubino-7707a3106/" target="_blank">
                                        <Linkedin />
                                    </a>

                                    <a href="https://www.instagram.com/tubino2k/" target="_blank">
                                        <Instagram />
                                    </a>

                                    <a href="https://www.facebook.com/lucas.machadotubino?locale=pt_BR" target="_blank">
                                        <Facebook />
                                    </a>

                                    <a href="https://github.com/Tubino" target="_blank">
                                        <Github />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 rounded-lg shadow-xs" >
                            <h3 className="text-2xl font-semibold mb-6"> Envie uma mensagem</h3>
                            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2"> Seu nome</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="Digite seu nome aqui"
                                    >

                                    </input>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2"> Seu Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="exemplo@email.com"
                                    >

                                    </input>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2"> Sua mensagem</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Olá, eu gostaria de falar sobre..."
                                    >

                                    </textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    
                                    )}>
                                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                    <Send size={16}/>

                                </button>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    );
}