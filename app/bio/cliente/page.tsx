import FormShell from "@/components/bio/forms/FormShell";
import { clienteForm } from "@/lib/bio/forms/cliente";

export const metadata = {
  title: "Quero ser cliente — LiveLab",
  description: "Conte sobre sua marca e receba um diagnóstico gratuito da sua operação de live commerce, com retorno em até 24h.",
  alternates: { canonical: "/bio/cliente" },
};

export default function Page() {
  return <FormShell form={clienteForm} />;
}
