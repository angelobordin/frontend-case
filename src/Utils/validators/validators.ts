const validateCpf = (cpf: string) => {
  if (!cpf || cpf == "") return false;
  else return true;
};

const validatePassword = (password: string) => {
  if (!password || password == "") return false;
  return password.length >= 6;
};

export { validateCpf, validatePassword };
