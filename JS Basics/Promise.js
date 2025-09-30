
const myPromise = new Promise((resolve, reject) => {
   const a = 5, b = 10;

   if (a + b === 15) {
      resolve("Success");
   } else {
      reject("Failed");
   }
});

myPromise.then((message) => console.log(message)).catch((message) => console.log(message));

