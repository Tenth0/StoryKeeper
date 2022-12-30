import React from 'react'
import NavigationBar from '@/components/navigation_bar'
import CategoryList from '@/components/category_list';
import AddCategory from '@/components/add_category';

const CategoryTable:React.FC = () => {
  return (
    <>
        <NavigationBar />
        <AddCategory />
        <CategoryList />
    </>
  );
}

export default CategoryTable