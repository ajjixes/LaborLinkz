import Link from "next/link";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between py-24 gap-12 px-64 bg-[url('/login.png')]">
      {/*Left Container */}
      <h1 className="flex flex-col text-xl xl:text-[2.4rem] text-primary items-center">
        <span className="font-medium">Empowering Local Laborers,</span>
        <span className="font-medium mt-4">Linking Opportunities</span>
      </h1>

      {/*Right Container */}
      <LoginForm />
    </main>
  );
}
