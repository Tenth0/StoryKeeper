export type Item = {
    id:number,
    title:string,
    category_id:number,
    comment:string,
    read_time:string,
    order:number,
    is_favorite:boolean,
}

export type Category = {
    id: number;
    title: string;
    color: Color;
};

export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';

export type CardData = {
    id:number,
    title:string,
    category_id:number,
    comment:string,
    read_time:string,
    order:number,
    is_favorite:boolean,
    category_title: string,
    color: Color,
}

  