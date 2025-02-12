import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function CreatePage({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
