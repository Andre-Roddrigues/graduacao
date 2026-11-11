"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  BadgeCheck,
  GraduationCap,
  TrendingUp,
  ShieldCheck,
  Crown,
  Users,
} from "lucide-react";
import CTAGraduacao from "./CTAGraduacao";

const slides = [
  { src: "/images/gr4.jpg", alt: "Profissional bem-sucedido" },
  { src: "/images/gr2.jpg", alt: "Estudantes em sala de aula" },
  { src: "/images/gr6.jpg", alt: "Formatura universitária" },
  { src: "/images/gr5.jpg", alt: "Networking profissional" },
];

const passos = [
  {
    icon: UserPlus,
    titulo: "Crie o seu perfil",
    descricao: "Registe a sua formação, experiência e principais competências.",
  },
  {
    icon: BadgeCheck,
    titulo: "Integre a base de talentos",
    descricao: "O seu perfil passa a estar disponível para empresas parceiras.",
  },
  {
    icon: GraduationCap,
    titulo: "Garanta a sua graduação",
    descricao: "Complete a inscrição e inicie a sua carreira com confiança.",
  },
];

const beneficios = [
  {
    icon: TrendingUp,
    titulo: "Melhor remuneração",
    descricao: "Profissionais graduados tendem a ganhar significativamente mais.",
  },
  {
    icon: ShieldCheck,
    titulo: "Maior estabilidade",
    descricao: "Um diploma aumenta as suas oportunidades de empregabilidade.",
  },
  {
    icon: Crown,
    titulo: "Progressão de carreira",
    descricao: "A formação abre caminho para cargos de liderança.",
  },
  {
    icon: Users,
    titulo: "Rede de contactos",
    descricao: "Conecte-se com profissionais e empresas do sector.",
  },
];

export default function GraduacaoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <main className="bg-white text-slate-800">
      {/* Hero — ocupa todo o ecrã */}
      {/* Hero — fundo azul, texto à esquerda, imagens à direita */}
<section className="relative w-full overflow-hidden bg-brand-main">
  {/* Decoração de fundo opcional */}
  <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-brand-lime/20 blur-3xl" />

  <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-10 px-6 py-24 lg:flex-row lg:gap-16 lg:px-8">
    
    {/* Texto — lado esquerdo */}
    <div className="w-full lg:w-1/2">

      <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        A graduação que o{" "}
        <span className="text-brand-lime">mercado precisa</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
        Uma formação que combina conhecimento teórico e prático, pensada
        para lhe abrir portas a oportunidades reais de crescimento
        profissional.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/user/perfil"
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-lime px-7 py-4 text-base font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Criar o meu perfil
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <a
          href="#como-funciona"
          className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
        >
          Saber mais
        </a>
      </div>
    </div>

    {/* Imagens / carrossel — lado direito */}
    <div className="relative w-full lg:w-1/2">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={index === currentSlide ? slide.alt : ""}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Controlos do carrossel sobre a imagem */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
          <button
            onClick={prevSlide}
            aria-label="Imagem anterior"
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para a imagem ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-brand-lime"
                    : "w-2.5 bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Imagem seguinte"
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Como funciona
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Três passos simples para dar visibilidade ao seu percurso
              académico e profissional.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {passos.map((passo, index) => {
              const Icon = passo.icon;
              return (
                <div
                  key={passo.titulo}
                  className="rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-brand-main/30 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-main/10 text-brand-main">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {passo.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {passo.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Porque vale a pena graduar-se
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Uma graduação é um investimento que se reflete no seu percurso ao
              longo de toda a carreira.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titulo}
                  className="rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-lime/15 text-brand-main">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold text-slate-900">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faixa de chamada */}
      {/* <section className="bg-brand-main py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            O seu futuro profissional começa com um passo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Crie já o seu perfil e dê o primeiro passo para uma carreira sólida
            e com propósito.
          </p>
          <Link
            href="/user/perfil"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-semibold text-brand-main shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Criar o meu perfil
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section> */}

      <CTAGraduacao />
    </main>
  );
}