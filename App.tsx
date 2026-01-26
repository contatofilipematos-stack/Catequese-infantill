
import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Check, 
  Star,
  Download,
  BookOpen,
  Heart,
  MousePointerClick,
  Sparkles,
  X,
  Smartphone,
  FileText,
  Gift
} from 'lucide-react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { BONUSES, BONUS_MATERIALS, FAQS, BENEFITS, TEXT_TESTIMONIALS } from './constants';

const DIAMOND_CHECKOUT_URL = "https://pay.lowify.com.br/checkout?product_id=jlUfor";
const ESSENTIAL_CHECKOUT_URL = "https://pay.lowify.com.br/checkout?product_id=k5FqbV";

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDiamondCheckout = () => {
    window.open(DIAMOND_CHECKOUT_URL, '_blank');
  };

  const handleEssentialCheckout = () => {
    window.open(ESSENTIAL_CHECKOUT_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative gradient-blue text-white overflow-hidden pt-12 pb-16 px-4 md:pt-16 md:pb-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 reveal-left visible z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
                <span className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </span>
                <span className="text-xs md:text-sm font-bold tracking-tight text-blue-50">
                  O MATERIAL MAIS COMPLETO DO BRASIL
                </span>
              </div>
              
              <h1 className="font-black leading-[1.1] tracking-tight">
                <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white mb-2">
                  Material para
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-yellow-400 drop-shadow-2xl">
                  Catequese Infantil <span className="underline decoration-white/30 text-white">Pronta para Uso</span>.
                </span>
              </h1>
              
              <div className="space-y-3">
                <p className="text-xl md:text-2xl text-blue-100 font-bold leading-tight">
                  Tudo o que você precisa para uma catequese inesquecível.
                </p>
                <p className="text-lg md:text-xl text-blue-50/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Ganhe tempo e encante as crianças com nossa coleção ilustrada de 4 materiais digitais focados na doutrina e diversão.
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4 pt-2">
                <Button 
                  onClick={handleDiamondCheckout} 
                  className="w-full sm:w-auto px-12 py-5 text-xl md:text-2xl font-black bg-yellow-400 text-blue-950 hover:bg-yellow-300 shadow-[0_20px_50px_rgba(250,204,21,0.4)] border-b-4 border-yellow-600 active:border-b-0 translate-y-0 active:translate-y-1 transition-all"
                >
                  QUERO O KIT COMPLETO AGORA
                  <MousePointerClick className="w-6 h-6" />
                </Button>
                
                <div className="flex items-center gap-6 mt-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-bold text-white/90">Compra 100% Segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-blue-300" />
                    <span className="text-sm font-bold text-white/90">Acesso no E-mail</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] mt-[-1rem] lg:mt-[-3rem] reveal-right visible flex items-center justify-center lg:justify-end z-10">
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full scale-75"></div>
              
              <div className="relative w-full max-w-sm lg:mr-0 h-full flex items-center justify-center">
                <img 
                  src={BONUSES[3].imageUrl} 
                  alt="Mockup 4" 
                  className="absolute top-10 -left-10 w-5/12 aspect-[3/4] object-cover rounded-xl shadow-2xl border border-white/10 rotate-[-4deg] z-10"
                />
                <img 
                  src={BONUSES[2].imageUrl} 
                  alt="Mockup 3" 
                  className="absolute top-10 -right-10 w-5/12 aspect-[3/4] object-cover rounded-xl shadow-2xl border border-white/10 rotate-[4deg] z-10"
                />
                <img 
                  src={BONUSES[1].imageUrl} 
                  alt="Mockup 2" 
                  className="absolute top-20 left-0 w-6/12 aspect-[3/4] object-cover rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-2 border-white rotate-[-2deg] z-20"
                />
                
                <div className="absolute top-28 left-1/2 -translate-x-1/2 w-7/12 aspect-[3/4] z-30">
                  <div className="relative w-full h-full">
                    <img 
                      src={BONUSES[0].imageUrl} 
                      alt="Main Product" 
                      className="w-full h-full object-cover rounded-2xl shadow-[0_50px_100px_rgba(0,0,0,0.6)] border-4 border-white"
                    />
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-blue-900 px-4 py-2 rounded-xl shadow-2xl font-black text-sm md:text-base border-2 border-white">
                      4 EM 1
                    </div>
                  </div>
                </div>

                <div className="absolute top-8 -right-12 lg:-right-8 z-40 bg-white text-blue-900 p-3 rounded-2xl shadow-xl border border-blue-50 animate-float-slow hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500 p-2 rounded-lg text-white">
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-red-500 leading-none">Formato PDF</div>
                      <div className="text-xs font-bold">Imprimir Agora</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-16 lg:-left-24 z-40 bg-white text-blue-900 p-3 rounded-2xl shadow-xl border border-blue-50 animate-float hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg text-white">
                      <Smartphone size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-red-400 leading-none">Acesso Vitalício</div>
                      <div className="text-xs font-bold">No Celular</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. O QUE VOCÊ VAI RECEBER */}
      <Section className="bg-white relative">
        <div className="text-center mb-16 relative z-10 reveal">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-4">Seu Arsenal de Catequista</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">O que você vai receber ✨</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 relative z-10">
          <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 reveal">
            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6">Conteúdos Inclusos no Kit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {BONUSES.map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="bg-blue-500/20 rounded-full p-1"><Check className="w-4 h-4 text-blue-400" /></div>
                  <span className="font-bold text-lg text-blue-50">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center reveal">
          <Button onClick={handleDiamondCheckout} className="px-10 py-5 text-xl font-black">
            Quero esse material para minhas aulas
          </Button>
        </div>
      </Section>

      {/* 3. COMO ISSO TRANSFORMA SUAS AULAS */}
      <Section className="bg-blue-600 text-white rounded-[4rem] overflow-hidden">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Como isso transforma suas aulas</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium opacity-80">
            A catequese se torna mais leve, participativa e as crianças realmente guardam o ensinamento no coração.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BENEFITS.map((benefit, i) => (
            <div key={i} className="flex gap-6 items-start bg-white/5 p-8 rounded-3xl border border-white/10 reveal">
              <div className="bg-white rounded-2xl p-3 shadow-lg flex-shrink-0">
                {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-8 h-8 text-blue-600" })}
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-2">{benefit.title}</h3>
                <p className="text-blue-50/70 leading-relaxed font-medium">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. GRID DE MATERIAIS */}
      <Section className="bg-slate-900 text-white overflow-hidden">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1 bg-blue-600 text-xs font-black rounded-full mb-4 tracking-widest uppercase">Combo Completo</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Explore os 4 Materiais</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {BONUSES.map((bonus, i) => (
            <div key={bonus.id} className={`flex flex-col bg-white/5 rounded-2xl p-3 border border-white/10 hover:bg-white/10 transition-all group reveal delay-${(i % 5) * 100}`}>
              <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3 shadow-xl">
                <img src={bonus.imageUrl} alt={bonus.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-xs md:text-sm text-center text-slate-300 leading-tight">{bonus.name}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <Button onClick={handleDiamondCheckout} variant="white" className="mx-auto">
            Quero receber o Kit Completo
          </Button>
        </div>
      </Section>

      {/* 5. BÔNUS EXCLUSIVOS */}
      <Section className="bg-yellow-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <Gift className="w-64 h-64 text-yellow-600" />
        </div>
        
        <div className="text-center mb-16 reveal relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-yellow-400 text-yellow-900 text-xs font-black rounded-full mb-4 tracking-widest uppercase shadow-sm">
            <Gift className="w-4 h-4" />
            PRESENTES PARA VOCÊ
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Bônus Exclusivos e Gratuitos 🎁</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
            Ao garantir o Plano Diamante hoje, você ganha acesso imediato a esses materiais extras que vão facilitar ainda mais sua missão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[90rem] mx-auto relative z-10">
          {BONUS_MATERIALS.map((bonus, i) => (
            <div key={bonus.id} className="bg-white rounded-[2rem] p-5 shadow-xl border-2 border-dashed border-yellow-300/50 relative reveal group flex flex-col">
              <div className="absolute -top-3 -right-3 bg-red-600 text-white px-4 py-1.5 rounded-full font-black text-xs shadow-lg uppercase tracking-tight z-10">
                100% Grátis
              </div>
              
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-inner mb-6 bg-slate-50">
                <img 
                  src={bonus.imageUrl} 
                  alt={bonus.name} 
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${i >= 1 ? 'object-top' : ''}`}
                />
              </div>
              
              <div className="flex-grow space-y-3">
                <h3 className="text-lg font-black text-slate-900 leading-tight">{bonus.name}</h3>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">
                  {i === 0 ? "Um recurso lúdico incrível para fixar o aprendizado bíblico com diversão e montagem." : 
                   i === 1 ? "Conte a história da criação de forma visual e inesquecível com nossos quadrinhos exclusivos de Adão e Eva." : 
                   i === 2 ? "Acompanhe a jornada de fé e a libertação do povo de Deus com este material bônus riquíssimo sobre Moisés." :
                   "Ajude as crianças a guardarem a Palavra de Deus no coração com este caderno lúdico para registrar e colorir versículos."}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-green-600 font-bold text-[10px] uppercase">
                <Check className="w-3 h-3" />
                <span>Incluso no Plano Diamante</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center reveal">
           <div className="bg-white px-8 py-4 rounded-3xl shadow-sm border border-yellow-200 flex flex-col md:flex-row items-center gap-4">
              <span className="text-slate-400 font-bold text-sm">Valor total desses bônus se vendidos separadamente:</span>
              <span className="text-red-500 font-black text-xl line-through">R$ 57,00</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-black text-sm uppercase">Para você: R$ 0,00</span>
           </div>
        </div>
      </Section>

      {/* 6. OFERTA / PLANOS */}
      <Section id="pricing" className="bg-slate-100/50 relative overflow-hidden">
        <div className="text-center mb-16 relative z-10 reveal">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Escolha o plano ideal para você</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-200 flex flex-col h-full reveal-left">
            <div className="mb-8">
              <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Plano Essencial</h4>
              <p className="text-slate-500 font-medium">Ideal para começar agora.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900">R$ 5,99</span>
              </div>
              <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mt-2">Pagamento Único</p>
            </div>

            <div className="space-y-4 mb-12 flex-grow">
              {BONUSES.slice(0, 2).map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-full p-1 mt-1"><Check className="w-4 h-4 text-green-600" /></div>
                  <span className="font-bold text-slate-700">{item.name}</span>
                </div>
              ))}
              <div className="flex items-start gap-4 opacity-40">
                <div className="bg-slate-100 rounded-full p-1 mt-1"><X className="w-4 h-4 text-slate-400" /></div>
                <span className="font-bold text-slate-500 line-through text-sm">Acesso a todos os 4 materiais</span>
              </div>
              <div className="flex items-start gap-4 opacity-40">
                <div className="bg-slate-100 rounded-full p-1 mt-1"><X className="w-4 h-4 text-slate-400" /></div>
                <span className="font-bold text-slate-500 line-through text-sm">Todos os Bônus Exclusivos</span>
              </div>
            </div>

            <Button onClick={handleEssentialCheckout} className="w-full text-lg py-5" variant="outline">
              Quero o Plano Essencial
            </Button>
          </div>

          <div className="relative group flex flex-col h-full reveal-right">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2.7rem] blur-md opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl flex flex-col h-full border border-white/10 shine-effect overflow-hidden animate-pulse-card">
              <div className="mb-8">
                <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Plano Diamante</h4>
                <p className="text-blue-400 font-bold">O Kit Completo para sua Catequese.</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">R$ 10,00</span>
                </div>
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mt-2">Pagamento Único • Acesso Imediato</p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 shadow-glow"><Check className="w-4 h-4 text-white" /></div>
                  <span className="font-black text-white text-sm">TODOS os 4 Materiais Digitais</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 shadow-glow"><Check className="w-4 h-4 text-white" /></div>
                  <span className="font-black text-white text-sm">Bíblia, Bobbie Goods, 10 Mandamentos e 7 Sacramentos</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 rounded-full p-1 mt-1 shadow-glow"><Check className="w-4 h-4 text-slate-900" /></div>
                  <span className="font-black text-yellow-400 text-sm tracking-tight uppercase">TODOS OS BÔNUS (Quebra-cabeça, Adão e Eva, Moisés + Caderno de Versículos)</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 shadow-glow"><Check className="w-4 h-4 text-white" /></div>
                  <span className="font-black text-white text-sm">Acesso Vitalício e Imediato no E-mail</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-full p-1 mt-1 shadow-glow"><Check className="w-4 h-4 text-white" /></div>
                  <span className="font-black text-white text-sm">Garantia Incondicional de 7 Dias</span>
                </div>
              </div>

              <Button onClick={handleDiamondCheckout} className="w-full text-xl py-6 bg-blue-600 border-none shadow-[0_10px_40px_rgba(37,99,235,0.4)]">
                Quero o Plano Completo
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. DEPOIMENTOS */}
      <Section className="bg-white">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-black uppercase tracking-widest mb-4">Comunidade</div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">O que outras catequistas estão dizendo</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEXT_TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="bg-blue-50 p-8 rounded-[2rem] shadow-sm border border-blue-100 relative reveal delay-100 flex flex-col h-full">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 italic font-medium leading-relaxed mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-black text-blue-900">{testimonial.name}</p>
                <p className="text-blue-600/70 text-sm font-bold">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. GARANTIA */}
      <Section className="bg-slate-900 text-white rounded-t-[4rem] overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48 reveal">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
            <img src="https://iili.io/f6pQAbt.png" alt="Selo de Garantia" className="relative z-10 w-full h-full rounded-full border-4 border-blue-500/50 p-2 object-cover" />
          </div>
          <div className="reveal space-y-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Satisfação Garantida</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              Experimente por 7 dias. Se o material não superar suas expectativas, devolvemos 100% do seu investimento sem burocracia.
            </p>
            <div className="pt-6 flex justify-center">
              <Button onClick={handleDiamondCheckout} className="bg-blue-600 border-none hover:bg-blue-500 text-white px-12 py-5 text-xl font-black">
                Comprar com Garantia Total
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FAQ */}
      <Section className="bg-white">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl font-bold text-slate-900">Perguntas Comuns</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 reveal">
              <button 
                className="w-full px-8 py-5 flex items-center justify-between text-left font-bold text-slate-800"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {faq.question}
                {openFaq === i ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openFaq === i && (
                <div className="px-8 pb-6 text-slate-500 font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <footer className="bg-slate-950 text-white py-12 px-4 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h4 className="font-bold text-xl">Catequese em Quadrinhos</h4>
          <div className="flex justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>Acesso Vitalício</span>
            <span>•</span>
            <span>Material Digital</span>
            <span>•</span>
            <span>Entrega Imediata</span>
          </div>
          <p className="text-slate-600 text-xs">© 2024 • Todos os direitos reservados. Este é um produto digital entregue via e-mail.</p>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-lg border-t border-slate-100 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <button 
          onClick={handleDiamondCheckout}
          className="w-full bg-blue-600 text-white font-black py-4 rounded-xl animate-pulse-cta uppercase tracking-tighter"
        >
          QUERO O KIT COMPLETO - R$ 10,00
        </button>
      </div>
    </div>
  );
};

export default App;
