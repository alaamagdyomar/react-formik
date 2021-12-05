export const items = [
  {
    categories: {
      Tea: {
        locations: {
          cairo: {
            price: 25,
          },
          alex: {
            price: 30,
          },
          sharm: {
            price: 50,
          },
        },
      },
      Nescafe: {
        locations: {
          cairo: {
            price: 25,
          },
          alex: {
            price: 30,
          },
          sharm: {
            price: 50,
          },
        },
      },
      Coffe: {
        locations: {
          cairo: {
            price: 25,
          },
          alex: {
            price: 30,
          },
          sharm: {
            price: 50,
          },
        },
      },
      HotChocolate: {
        locations: {
          cairo: {
            price: 25,
          },
          alex: {
            price: 30,
          },
          sharm: {
            price: 50,
          },
        },
      },
      Mango: {
        locations: {
          cairo: {
            price: 25,
          },
          alex: {
            price: 30,
          },
          sharm: {
            price: 50,
          },
        },
      },
      Lemon: {
        locations: {
          cairo: {
            price: 25,
          },
          alex: {
            price: 30,
          },
          sharm: {
            price: 50,
          },
        },
      },
    },
  },
];

// filter locations
export const itemsLocation = items.map((item) => item.categories);
// tea prices with location
export const teaCairoPrice = itemsLocation[0].Tea.locations.cairo.price;
export const teaAlexPrice = itemsLocation[0].Tea.locations.alex.price;
export const teaSharmPrice = itemsLocation[0].Tea.locations.sharm.price;

// nescafe prices with location
export const nescafeAlexPrice = itemsLocation[0].Nescafe.locations.alex.price;
export const nescafeCairoPrice = itemsLocation[0].Nescafe.locations.cairo.price;
export const nescafeSharmPrice = itemsLocation[0].Nescafe.locations.sharm.price;

// coffe prices with location
export const coffeCairoPrice = itemsLocation[0].Coffe.locations.cairo.price;
export const coffeAlexPrice = itemsLocation[0].Coffe.locations.alex.price;
export const coffeSharmPrice = itemsLocation[0].Coffe.locations.sharm.price;

// hotchocolate prices with location
export const hotChocolateCairoPrice =
  itemsLocation[0].HotChocolate.locations.cairo.price;
export const hotChocolateAlexPrice =
  itemsLocation[0].HotChocolate.locations.alex.price;
export const hotChocolateSharmPrice =
  itemsLocation[0].HotChocolate.locations.sharm.price;

// mango prices with location
export const mangoCairoPrice = itemsLocation[0].Mango.locations.cairo.price;
export const mangoAlexPrice = itemsLocation[0].Mango.locations.alex.price;
export const mangoSharmPrice = itemsLocation[0].Mango.locations.sharm.price;

// lemon prices with location
export const lemonCairoPrice = itemsLocation[0].Lemon.locations.cairo.price;
export const lemonAlexPrice = itemsLocation[0].Lemon.locations.alex.price;
export const lemonSharmPrice = itemsLocation[0].Lemon.locations.sharm.price;

// filter object keys
export const objKeys = Object.keys(itemsLocation[0]);
