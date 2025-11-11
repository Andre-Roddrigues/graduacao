"use client"
import React from "react";

export default function CTAGraduacao() {
    return (
        <div className="relative bg-brand-main shadow-2xl overflow-hidden">
            {/* Formas geométricas */}
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-brand-lime transform rotate-12 translate-x-20 -translate-y-20 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue transform -rotate-12 translate-x-32 -translate-y-10 rounded-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-lime transform rotate-12 translate-x-32 translate-y-32 rounded-3xl"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-12 items-center">

                {/* Esquerda */}
                <div className="space-y-6 z-10">
                    {/* Logo PROMET */}
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="font-bold text-white text-2xl"><CompactCountdown /></div>
                            <div className="text-xs text-gray-300">

                            </div>
                        </div>
                    </div>

                    {/* Título */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Graduação
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="text-brand-lime">que Transforma Futuros</span>
                    </h2>

                    {/* Descrição */}
                    <p className="text-white text-sm leading-relaxed max-w-md">
                        A sua graduação é o primeiro passo para transformar sonhos em
                        conquistas reais.
                        Este é o momento de acreditar no seu potencial, investir no seu
                        conhecimento e construir uma carreira que será motivo de orgulho
                        para você e para quem acredita em você.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="/user/graduacao"
                            className="bg-brand-lime hover:bg-brand-blue text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
                        >
                            PAGAR GRADUAÇÃO
                        </a>
                    </div>
                </div>

                {/* Imagem */}
                <div className="relative z-10 flex justify-center items-center">
                    <div className="relative">
                        <div className="relative bg-white p-6 rounded-full shadow-xl hover:scale-105 transition-transform">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-inner">
                                <img
                                    src="/images/graduacao.jpg"
                                    alt="Estudantes em Graduação"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// Componente de Contagem Regressiva Compacta (para o logo)
function CompactCountdown() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-12-31T23:59:59');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            return {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                segundos: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return { dias: 0, horas: 0, minutos: 0, segundos: 0};
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <span className="text-white font-bold text-xl">
            {timeLeft.dias}d {timeLeft.horas.toString().padStart(2, '0')}h {timeLeft.minutos.toString().padStart(2, '0')}m {timeLeft.segundos.toString().padStart(2, '0')}s
        </span>
    );
}

// Componente de Contagem Regressiva Principal
function CountdownTimer() {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2025-11-28T23:59:59');
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            return {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                segundos: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }

        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
}