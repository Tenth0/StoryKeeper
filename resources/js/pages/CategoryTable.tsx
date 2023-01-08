import React,{ useEffect } from 'react'
import NavigationBar from '@/components/NavigationBar'
import CategoryBody from '@/components/Category/CategoryBody';
import { useSetRecoilState } from 'recoil';
import { categoriesState } from '../states/categories';

const CategoryTable:React.FC<{}> = ({categories}:any) => {
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