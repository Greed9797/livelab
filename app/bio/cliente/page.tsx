import FormShell from "@/components/bio/forms/FormShell";
import { clienteForm } from "@/lib/bio/forms/cliente";

export const metadata = { title: "Quero ser cliente — LiveLab" };

export default function Page() {
  return <FormShell form={clienteForm} />;
}
