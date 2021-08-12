const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// // Code your solution here
// const products = [
//     { name: 'Shampoo', price: 4.99 },
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
//   ];

//   const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];

// //   function getTotalAmountForProducts(products) {
// //       let totalPrice = 0;

// //       for (const product of products) {
// //           totalPrice += product.price;
// //       };

// //       return totalPrice;
// //   }

// //   console.log(getTotalAmountForProducts(products))

// //   function ourReduce(arr, reducer, init) {
// //       let accum = init;
// //       for (const element of arr) {
// //           accum = reducer(accum, element);
// //       };
// //       return accum;
// //   }

//   function couponCounter(totalAmount, location) {
//       return totalAmount + location.amount;
//   }

// //   console.log(ourReduce(couponLocations, couponCounter, 0));

// console.log(couponLocations.reduce(couponCounter, 0));

// const hogwartsHouses = {
//     "Slytherin": [],
//     "Gryffindor": [],
//     "Hufflepuff": [],
//     "Ravenclaw": []
//   }

const totalBatteries = batteryBatches.reduce(function(accumulator, element){return element + accumulator}, 0);
