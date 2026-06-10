import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl mb-6">Aura Wellness Architecture</h3>
          <p className="text-muted/60 max-w-sm font-light leading-relaxed">
            Elevando o conceito de bem-estar em projetos arquitetônicos de alto padrão.
            O silêncio das coisas caras. A certeza do design intencional.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted/40 mb-6">Navegação</h4>
          <ul className="space-y-4 font-light text-sm text-muted/80">
            <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
            <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfólio</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-muted/40 mb-6">Contato</h4>
          <ul className="space-y-4 font-light text-sm text-muted/80">
            <li><Link href="/questionario" className="hover:text-white transition-colors">Iniciar Projeto</Link></li>
            <li><a href="mailto:studio@aurawellness.com" className="hover:text-white transition-colors">studio@aurawellness.com</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-muted/40">
        <p>© {new Date().getFullYear()} Aura Wellness Architecture. Todos os direitos reservados.</p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
}
