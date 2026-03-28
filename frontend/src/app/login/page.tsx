import MainComponent from "@/components/mainComponent";
import CardLogin from "@/components/cardLogin";
import Img from "@/components/ui/img";
import FormLogin from "@/components/formLogin";

function LoginPage() {
    return (
        <MainComponent>
            <CardLogin>
                <Img src="/baldimLogo.png" alt="Logo" width={200} height={200} className="mx-1 rounded-lg" />
                <h1 className="text-4xl font-bold text-center mt-2">Junte-se ao time</h1>
                <p className="text-center text-gray-500 mt-2 mb-6">Faça login para continuar</p>
                <FormLogin />
            </CardLogin>
        </MainComponent>
    );
}

export default LoginPage;
