type Menu = {
    name: string;
    price: number;
}
const menu: Menu[] = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "veggie", price: 9},
]

const cashInRegister = 100;
const nextOrder = 1;
const orderQueue = [];
