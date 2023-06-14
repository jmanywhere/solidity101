import Image from "next/image";
import Web3HeaderBtn from "@/components/Web3HeaderBtn";
import SignUpSection from "@/components/Signup";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800 py-12">
      <header className="fixed top-0 flex flex-col justify-center sm:flex-row sm:justify-between px-8 w-full py-4 items-center gap-y-4">
        <h1 className="font-syneMono text-4xl text-center ">
          ETH Guatemala Solidity 101
        </h1>
        <Suspense fallback="...">
          <Web3HeaderBtn />
        </Suspense>
      </header>
      <section className="px-4 py-6">
        <h2 className="text-center text-4xl font-syneMono">Bienvenidos</h2>
      </section>
      <SignUpSection />
    </main>
  );
}
