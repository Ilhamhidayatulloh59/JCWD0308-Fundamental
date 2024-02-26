// const tryPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve("success");
//     } else {
//       reject("error ini di reject");
//     }
//   }, 2000);
// });

// const tryAndCatch = async () => {
//   try {
//     const result = await tryPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// tryAndCatch()

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    if (users.length < 11) throw "user kurang dari sebelas"
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

fetchData();
