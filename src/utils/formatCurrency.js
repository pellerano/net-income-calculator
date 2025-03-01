export const formatCurrency = (value) => {
  const formatValue = `${value}`;

  let numericValue = formatValue.replace(/[^0-9.-]/g, "");

  numericValue = numericValue.replace(/(?!^)-/g, "");

  const decimalCount = (numericValue.match(/\./g) || []).length;
  if (decimalCount > 1) {
    numericValue = numericValue.slice(0, numericValue.lastIndexOf("."));
  }

  const numberValue = parseFloat(numericValue);
  if (isNaN(numberValue)) return "";

  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numberValue);
};
