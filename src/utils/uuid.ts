import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890AUIEOLMNHJKQ', 8);
export function getId() {
  return nanoid();
}
