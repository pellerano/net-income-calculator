"use client";
import { useMemo, useState } from "react";
import InputCard from "@/components/common/InputCard";
import ResultsCard from "@/components/common/ResultsCard";
import useCalculator from "@/hooks/use-calculator";
import { TooltipProvider } from "@/components/ui/tooltip";
import Emoji from "react-emoji-render";
import DRFlag from "@/components/common/DRFlag";

export default function Home() {
  const [salary, setSalary] = useState({ salary: 0, savings: 0 });
  const { calculate } = useCalculator();

  const handleSalaryChange = (e) =>
    setSalary((curr) => ({ ...curr, [e.target.name]: e.target.value }));

  const results = useMemo(() => {
    const { salary: grossSalary, savings } = salary;
    return calculate(grossSalary, savings);
  }, [salary]);

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="mb-10 text-center flex flex-col items-center">
        <DRFlag />
        <h1 className="text-4xl font-bold">Calculadora de Sueldo Neto</h1>
        <p className="text-sm text-gray-500">
          Calcula tu ingreso neto en base a salarios en República Dominicana.
        </p>
      </div>
      <main className="flex flex-col md:flex-col lg:flex-row gap-8 row-start-2 items-center justify-center sm:items-start w-full">
        <TooltipProvider>
          <InputCard handleSalaryChange={handleSalaryChange} />
          <ResultsCard {...{ results, salary }} />
        </TooltipProvider>
      </main>
    </div>
  );
}
