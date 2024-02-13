function greeting(name) {
  const defaultMessage = "Hello ";

  return function () {
    return defaultMessage + name;
  };
}

const greetingDavid = greeting("David");
console.log(greetingDavid());
