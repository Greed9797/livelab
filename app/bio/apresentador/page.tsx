import FormShell from "@/components/bio/forms/FormShell";
import { apresentadorForm } from "@/lib/bio/forms/apresentador";

export const metadata = { title: "Candidatura apresentador(a) — LiveLab" };

export default function Page() {
  return <FormShell form={apresentadorForm} />;
}
