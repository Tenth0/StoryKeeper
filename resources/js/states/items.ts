import { atom } from 'recoil';
import { Item } from '../types';

export const itemsState = atom<Item>({
    key: 'items',
    default: [{
        id: 0,
        title: '',
        category_id: 0,
        comment: '',
        read_time: '',
        order: 0,
        is_favorite:false,
    }],
})
  