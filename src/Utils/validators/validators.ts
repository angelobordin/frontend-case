const validateCpf = (email: string) => {
  if (!email || email == "") return false;
  else return true;
};

const validatePassword = (password: string) => {
  if (!password || password == "") return false;
  return password.length >= 6;
};

export { validateCpf, validatePassword };
