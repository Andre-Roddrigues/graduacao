"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, CreditCard } from "lucide-react";
import ModalPagamentoGraduacao from "../../../DadosGraduacao/ModalPagamentoGraduacao";
interface ApplyButtonProps {
  isEnabled: boolean;
  onClick?: () => void;
  href?: string;
}

export default function ApplyButton({ isEnabled, onClick, href }: ApplyButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (isEnabled) {
      setIsModalOpen(true);
      onClick?.();
    }
  };

  const handleSuccess = () => {
    // Redirecionar para cursos após pagamento bem-sucedido
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <>
      <motion.button
        onClick={handleClick}
        disabled={!isEnabled}
        className={`
          relative px-5 py-4 rounded-2xl font-bold text-lg
          transition-all duration-300 transform
          flex items-center justify-center space-x-3
          min-w-[200px]
          ${isEnabled
            ? "bg-brand-lime text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
            : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
          }
        `}
        whileHover={isEnabled ? { scale: 1.05 } : {}}
        whileTap={isEnabled ? { scale: 0.95 } : {}}
      >
        {isEnabled ? (
          <>
            <CreditCard size={24} />
            <span>Pagar Graduação</span>
          </>
        ) : (
          <>
            <GraduationCap size={24} />
            <span>Completar Perfil</span>
          </>
        )}
        
        {/* Efeito de brilho no hover */}
        {isEnabled && (
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>

      <ModalPagamentoGraduacao
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  );
}