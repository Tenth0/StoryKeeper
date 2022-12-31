import { atom } from 'recoil';

export const itemsState = atom<string[]>({
    key: 'items',
    default: [],
  })
  