const formatMoney = (number, currency = "$", locale = "en-US") => {
  var formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  });

  if (typeof number == "string") {
    try {
      number = parseFloat(number);
    } catch (e) {
      return "0.00";
    }
  }

  return `${currency} ${formatter.format(number).toString().replace("$", "")}`;
};

export { formatMoney };
