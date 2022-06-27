function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  const namedFunction = () => {};

  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return () => {};
}