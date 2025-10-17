import PageLayout from "@/components/PageLayout";
import AuthForm from "@/components/AuthForm";
import InputField from "@/components/InputField";

export default function Cadastro() {
  return (
    <PageLayout title="Cadastro">
      <AuthForm title="Cadastro">
        <div className="space-y-6">
          <InputField
            label="Nome completo"
            type="text"
            placeholder="Seu nome completo"
            required
          />
          
          <InputField
            label="Email"
            type="email"
            placeholder="seu@email.com"
            required
          />
          
          <InputField
            label="Senha"
            type="password"
            placeholder="Sua senha"
            required
          />
          
          <InputField
            label="Confirmar senha"
            type="password"
            placeholder="Confirme sua senha"
            required
          />
          
          <button className="w-full bg-[#6F1FC6] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#5a1aa8] transition-colors duration-300">
            Criar conta
          </button>
        </div>
      </AuthForm>
    </PageLayout>
  );
}