import FormShell from "@/components/bio/forms/FormShell";
import { franqueadoForm } from "@/lib/bio/forms/franqueado";

export const metadata = { title: "Quero ser franqueado — LiveLab" };

export default function Page() {
  return <FormShell form={franqueadoForm} />;
}
