import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

const verify = async (password: string, passwordHash: string) => {
  const isValid = await compare(password, passwordHash);
  return isValid;
};

export { encrypt, verify };
