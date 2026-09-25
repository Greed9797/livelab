import FormShell from "@/components/bio/forms/FormShell";
import { franqueadoForm } from "@/lib/bio/forms/franqueado";

export const metadata = {
  title: "Quero ser franqueado — LiveLab",
  description: "Quer abrir uma LiveLab na sua cidade? Preencha o perfil de investidor da 1ª franquia de live commerce do Brasil.",
  alternates: { canonical: "/bio/franqueado" },
};

export default function Page() {
  return <FormShell form={franqueadoForm} />;
}
