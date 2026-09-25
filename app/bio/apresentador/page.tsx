import FormShell from "@/components/bio/forms/FormShell";
import { apresentadorForm } from "@/lib/bio/forms/apresentador";

export const metadata = {
  title: "Candidatura apresentador(a) — LiveLab",
  description: "Candidate-se para apresentar produtos ao vivo nas cabines da LiveLab.",
  alternates: { canonical: "/bio/apresentador" },
};

export default function Page() {
  return <FormShell form={apresentadorForm} />;
}
