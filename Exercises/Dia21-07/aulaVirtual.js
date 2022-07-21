// 1. Adicione um novo produto ao array com as mesmas propriedades dos produtos existentes.
// 2. Remova os produtos fora de estoque da matriz.
// 3. Imprima no console a soma do estoque de todos os produtos.
// 4. Imprima produtos com preço superior a um determinado valor.
// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.

let products = [
  { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

// Requisito 1:
const newProduct = {
  name: 'Smart TV',
  price: 3000,
  quantity: 70,
  colors: ['black', 'silver']
};

products.push(newProduct);

// Requisito 2:
const inStock = products.filter((product) => product.quantity > 0);
products = inStock;

// Requisito 3:
const totalStock = products.reduce((stock, product) => stock += product.quantity, 0);
console.log('Estoque total:', totalStock);

// Requisito 4:
const minPrice = 100;
const onPrice = products.filter((product) => product.price >= minPrice);
console.log('Produtos acima de R$100,00:', onPrice);

// Requisito 5:
const hasLetterO = products.filter((product) => product.name.includes('o'));
console.log('Produtos cujo nome possua a letra "O":', hasLetterO);