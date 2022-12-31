import React from 'react'
import NavigationBar from '@/components/navigation_bar'
import CategoryBody from '@/components/Category/category_body';

const CategoryTable:React.FC = (props) => {
  const { categories }:any = props;
  console.log(categories)
  return (
    <>
        <NavigationBar />
        <CategoryBody />
    </>
  );
}

export default CategoryTable