import { CartAddState } from "../interface/ICardAddState";

export const getItem = (key: string): Array<CartAddState> => {
  return JSON.parse(localStorage.getItem(key)!);
};

export const setItem = (key: string, data: Array<CartAddState>) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
