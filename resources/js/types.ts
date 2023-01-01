export type Item = {
    id:number,
    title:string,
    category_id:number,
    filename:string,
    comment:string,
    read_time:string,
    order:number,
}

export type Category = {
    id:number,
    title:string,
    color:string,
}