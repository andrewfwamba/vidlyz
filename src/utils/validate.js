// export const validateEmail = ({ value }) => {
//   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (reg.test(value)) {
//     return true;
//   } else {
//     return false;
//   }
// };

export const validatePassword = (password) => {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
};

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
