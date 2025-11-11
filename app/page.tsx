import type { Metadata } from "next";
import CTAGraduacao from "../components/Landing/Graduacao/CTAGraduacao";
import GraduacaoPage from "../components/Landing/Graduacao/GraduacaoPage";

export const metadata: Metadata = {
  title: "",
  description: "Programa de Melhoria de Empregabilidade e Trabalho que fortalece competências, promove inserção profissional e apoia carreiras sustentáveis.",
};

export default function Home() {

  return (
    <div>
      <GraduacaoPage />
    </div>
  );
}
