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

  function estimateGrossFromDeductions({ afpTarget, sfsTarget, isrTarget }) {
    let low = 0;
    let high = 2000000; // upper bound guess
    let guess, afp, sfs, isr, taxable, isrCalc;

    const tolerance = 0.01;

    while (high - low > tolerance) {
      guess = (low + high) / 2;
      afp = parseFloat((guess * 0.0287).toFixed(2));
      sfs = parseFloat((guess * 0.0304).toFixed(2));
      taxable = guess - afp - sfs;
      isrCalc = calculateISR(taxable).monthly;
      isr = parseFloat(isrCalc.toFixed(2));

      if (
        Math.abs(afp - afpTarget) < tolerance &&
        Math.abs(sfs - sfsTarget) < tolerance &&
        Math.abs(isr - isrTarget) < tolerance
      ) {
        return parseFloat(guess.toFixed(2));
      }

      // Use isr for comparison, since it's the most complex and non-linear
      if (isr > isrTarget) {
        high = guess;
      } else {
        low = guess;
      }
    }

    return parseFloat(((low + high) / 2).toFixed(2));
  }

  return { calculate, estimateGrossFromDeductions };
};

export default useCalculator;
