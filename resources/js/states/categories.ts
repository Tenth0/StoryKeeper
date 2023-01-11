import { atom } from 'recoil';
import { Category } from '../types';

export const categoriesState = atom<Category[]>({
    key:'categories',
    default: [{
        id: 0,
        title: '',
        color: 'light',
    }]
})