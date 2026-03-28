function CardLogin({ children }: { children: React.ReactNode }) {
    return (
        <div className=" w-full max-w-md md:max-w-lg rounded-xl p-6 md:p-10 border
  bg-gradient-to-b 
  from-[#2A0A4A] 
  via-[#2F0D55] 
  to-[#1F073A]
  border-zinc-200/10
  shadow-2xl
  flex flex-col items-center justify-center">
            {children}
        </div>
    );
}

export default CardLogin;
