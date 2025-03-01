import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calculadora de Ingresos Netos - República Dominicana",
  description:
    "Calcula tu salario neto en la República Dominicana después de impuestos y deducciones de seguridad social. Compatible con empleados y freelancers.",
  keywords:
    "Calculadora de salario, ingresos netos, República Dominicana, ISR, TSS, impuestos, AFP, SFS, sueldo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff0e6]`}
      >
        {children}
        <footer className="text-center text-[#ebb998] p-4 flex items-center justify-center gap-2">
          <Github size={20} />
          <p>
            <a
              href="https://github.com/pellerano/net-income-calculator"
              target="_blank"
            >
              Desarrollado por Hermes Pellerano
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
