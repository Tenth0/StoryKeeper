import React from 'react'
import NavigationBar from '@/components/navigation_bar'
import CategoryList from '@/components/category_list';

const AddCategory:React.FC = () => {
  return (
    <>
        <NavigationBar />
        <CategoryList />
    </>
  );
}

export default AddCategory