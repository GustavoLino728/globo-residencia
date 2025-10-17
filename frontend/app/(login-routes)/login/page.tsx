import PageLayout from "@/components/PageLayout";
import AuthForm from "@/components/AuthForm";
import InputField from "@/components/InputField";

export default function Login() {
  return (
    <PageLayout title="Login">
      <AuthForm title="Login">
        <div className="space-y-6">
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
          
          <button className="w-full bg-[#6F1FC6] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#5a1aa8] transition-colors duration-300">
            Entrar
          </button>
        </div>
      </AuthForm>
    </PageLayout>
  );
}
