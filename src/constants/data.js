const currencyTypes = {
    UNITED_STATES: "United States",
    MEXICAN: "Mexican",
}

const usDollars = {
    ONE_DOLLAR: "1.00",
    TWO_DOLLAR: "2.00",
    FIVE_DOLLAR: "5.00",
    TEN_DOLLARS: "10.00",
}

const mexicanPesos = {
    ONE_PESO: "1.00",
    TWO_PESOS: "2.00",
}
  
const availableProducts = [
    {
        name: "Fizz", 
        currencyTypes: "usDollars",
        price: 1.00, 
        amount : 100,
        description: "An effervescent fruity experience with hints of grape and coriander."
    },
    {
        name: "Pop", 
        currencyTypes: "usDollars",
        price: 1.00, 
        amount : 100,
        description: "An explosion of flavor that will knock your socks off!"
    },
    {
        name: "Cola", 
        currencyTypes: "usDollars",
        price: 1.00, 
        amount : 100,
        description: "A basic no nonsense cola that is the perfect pick me up for any occasion."
    },
    {
        name: "Mega Pop", 
        currencyTypes: "usDollars",
        price: 1.00, 
        amount : 100,
        description: "Not for the faint of heart.  So flavorful and so invigorating, it should probably be illegal."
    },
];

export {
    currencyTypes,
    usDollars,
    mexicanPesos,
    availableProducts
  }
  