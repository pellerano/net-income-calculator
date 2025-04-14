'use client';
import { useMemo, useState } from 'react';
import DeductionInputCard from '@/components/common/DeductionInputCard';
import DeductionsResultsCard from '@/components/common/DeductionResultsCard';
import useCalculator from '@/hooks/use-calculator';
import { TooltipProvider } from '@/components/ui/tooltip';
import DRFlag from '@/components/common/DRFlag';

export default function Page() {
  const [deductions, setDeductions] = useState({ isr: 0, afp: 0, sfs: 0 });
  const { estimateGrossFromDeductions } = useCalculator();

  const handleDeductionChange = (e) =>
    setDeductions((curr) => ({ ...curr, [e.target.name]: e.target.value }));

  const results = useMemo(() => {
    const { afp, sfs, isr } = deductions;
    if ([afp, sfs, isr].every((x) => x > 0))
      return estimateGrossFromDeductions({
        afpTarget: afp,
        isrTarget: isr,
        sfsTarget: sfs,
      });
    return undefined;
  }, [deductions]);

  return (
    <div className="items-center justify-items-center min-h-9/10 p-8 pb-20 gap-16 sm:p-20 sm:pt-4 font-[family-name:var(--font-geist-sans)]">
      <div className="mb-10 text-center flex flex-col items-center">
        <DRFlag />
        <h1 className="text-4xl font-bold my-2">Calculadora de Sueldo Bruto</h1>
        <p className="text-sm text-gray-500">
          Calcula tu ingreso bruto en base a deducciones en República
          Dominicana.
        </p>
      </div>
      <main className="flex flex-col md:flex-col lg:flex-row gap-8 row-start-2 items-center justify-center sm:items-start w-full">
        <TooltipProvider>
          <DeductionInputCard handleDeductionChange={handleDeductionChange} />
          <DeductionsResultsCard {...{ results, deductions }} />
        </TooltipProvider>
      </main>
    </div>
  );
}
