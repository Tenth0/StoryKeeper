import { atom } from 'recoil';
import { CardData } from '../types';

export const itemsState = atom<CardData[]>({
    key: 'items',
    default: [{
        id: 0,
        title: '',
        category_id: 0,
        comment: '',
        read_time: '',
        order: 0,
        is_favorite:false,
        category_title: '',
        color: 'light',
    }],
})
  