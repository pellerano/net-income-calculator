export const formatCurrency = (value) => {
  const formatValue = `${value}`;

  // Remove non-numeric characters except decimal points and leading negatives
  let numericValue = formatValue.replace(/[^0-9.-]/g, "");

  // Ensure only one leading negative sign
  numericValue = numericValue.replace(/(?!^)-/g, "");

  // Prevent multiple decimals
  const decimalCount = (numericValue.match(/\./g) || []).length;
  if (decimalCount > 1) {
    numericValue = numericValue.slice(0, numericValue.lastIndexOf("."));
  }

  // Convert to a number and format with two decimal places
  const numberValue = parseFloat(numericValue);
  if (isNaN(numberValue)) return "";

  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numberValue);
};
