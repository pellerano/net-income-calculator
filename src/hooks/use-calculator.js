const useCalculator = () => {
  function calculate(salary, savings = 0) {
    if (salary) {
      const afp = parseFloat((salary * 0.0287).toFixed(2));
      const sfs = parseFloat((salary * 0.0304).toFixed(2));
      const isr = calculateISR(salary - sfs - afp);

      const totalDeductions = parseFloat((afp + sfs + isr.monthly).toFixed(2));
      const totalMinusSavings = parseFloat(
        (salary - afp - sfs - isr.monthly - savings).toFixed(2)
      );
      const totalWithoutSavings = parseFloat(
        (salary - afp - sfs - isr.monthly).toFixed(2)
      );

      return {
        afp,
        sfs,
        isr: parseFloat(isr.monthly.toFixed(2)),
        totalDeductions,
        totalMinusSavings,
        totalWithoutSavings,
      };
    }
  }

  function calculateISR(salary) {
    let isr = 0;
    const annualSalary = salary * 12;

    if (annualSalary < 416220.0) {
      isr = 0;
    } else if (annualSalary > 416220.01 && annualSalary < 624329.0) {
      isr = (annualSalary - 416220.01) * 0.15;
    } else if (annualSalary > 624329.01 && annualSalary < 867123.0) {
      isr = (annualSalary - 624329.01) * 0.2 + 31216.0;
    } else if (annualSalary > 867123.0) {
      isr = (annualSalary - 867123.01) * 0.25 + 79776.0;
    }

    const biweekly = isr / 24;
    const monthly = isr / 12;

    return { yearly: isr, monthly, biweekly };
  }

  return { calculate };
};

export default useCalculator;
