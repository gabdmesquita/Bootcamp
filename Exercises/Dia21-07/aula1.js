const calcularPreco = (name, price) => {
  let shippingCost = 0;

  if (price > 0 && price <= 2000) {
    shippingCost = 300;
  } else if (price <= 4000) {
    shippingCost = 450;
  } else {
    shippingCost = 700;
  }

  const total = price + shippingCost;

  const result = `O produto ${name} custa R$ ${price}. Seu custo de envio é R$ ${shippingCost}. Portanto, o preço final é R$ ${total}.`

  return result;
};

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));