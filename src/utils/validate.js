export const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};

export const isValidEmail = (value) => {
  const regx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  return regx.test(value);
};
