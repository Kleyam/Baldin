import MainComponent from "@/components/mainComponent";
import CardLogin from "@/components/cardLogin";
import Img from "@/components/ui/img";
import FormLogin from "@/components/formLogin";

function LoginPage() {
    const mainProps = {
        className: "min-h-screen flex items-center justify-center p-4 transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100"
    }
    return (
        <MainComponent {...mainProps}>
            <CardLogin className=" w-full max-w-md md:max-w-lg rounded-xl p-6 md:p-10 border bg-gradient-to-b from-[#2A0A4A] via-[#2F0D55] to-[#1F073A] border-[#2A0A4A] shadow-2xl flex flex-col items-center justify-center">
                <Img src="/baldimLogo.png" alt="Logo" width={150} height={150} className="mx-1 rounded-lg w-[120px] md:w-[150px] lg:w-[200px] h-auto" />
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-2">Junte-se ao time</h1>
                <p className="text-center text-gray-500 mt-2 mb-6">Faça login para continuar</p>
                <FormLogin />
            </CardLogin>
        </MainComponent>
    );
}

export default LoginPage;
