import { api } from "./RickMorty";

export function setInitialRM(): api {
  return { info: { id: 0, name: '', description: '', imageUrl: '' } }
}