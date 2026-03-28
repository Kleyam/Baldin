import MainComponent from "@/components/mainComponent";
import CardLogin from "@/components/cardLogin";
import Img from "@/components/ui/img";
import FormLogin from "@/components/formLogin";

function LoginPage() {
    return (
        <MainComponent>
            <CardLogin>
                <Img src="/logo.png" alt="Logo" width={100} height={100} className="mx-auto rounded-lg" />
                <h1 className="text-4xl font-bold text-center mt-4">Junte-se ao time</h1>
                <p className="text-center text-gray-500 mt-2 mb-6">Faça login para continuar</p>
                <FormLogin />
            </CardLogin>
        </MainComponent>
    );
}

export default LoginPage;
