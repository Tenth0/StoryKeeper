import { atom } from 'recoil';
import { CardsData } from '../types';

export const itemsState = atom<CardsData>({
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
  