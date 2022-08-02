const calculateTax = (tax, content) => {
  return (
    parseFloat(tax) *
    0.01 *
    content.reduce((prev, curr) => prev + curr.qty * curr.cost, 0)
  );
};

const calculateDiscount = (discount, content) => {
  return (
    parseFloat(discount) *
    0.01 *
    content.reduce((prev, curr) => prev + curr.qty * curr.cost, 0)
  );
};

const calculateTotal = (tax, discount, content) => {
  return (
    content.reduce((prev, curr) => prev + curr.qty * curr.cost, 0) +
    calculateTax(tax, content) -
    calculateDiscount(discount, content)
  );
};
const exports = { calculateDiscount, calculateTax, calculateTotal };
export default exports;
