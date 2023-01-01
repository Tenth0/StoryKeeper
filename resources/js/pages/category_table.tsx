import React,{ useEffect } from 'react'
import NavigationBar from '@/components/navigation_bar'
import CategoryBody from '@/components/Category/category_body';
import { useSetRecoilState } from 'recoil';
import { categoriesState } from '../states/categories';

const CategoryTable:React.FC = ({categories}:any) => {
  const setCategories = useSetRecoilState(categoriesState);
  useEffect(() => {
    setCategories(categories)
  }, [])

  return (
    <>
        <NavigationBar />
        <CategoryBody />
    </>
  );
}

export default CategoryTable