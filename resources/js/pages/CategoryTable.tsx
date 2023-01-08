import React,{ useEffect } from 'react'
import CategoryBody from '@/components/Category/CategoryBody';
import { useSetRecoilState } from 'recoil';
import { categoriesState } from '../states/categories';
import NavigationBar from '@/components/NavigationBar';

const CategoryTable:React.FC<{}> = ({categories}:any) => {
  if(categories) {
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
      setCategories(categories)
    }, [])
    return (
      <>
        <NavigationBar />
        <CategoryBody />
      </>
    )
  }

  return (
    <>
      <CategoryBody />
    </>
  );
}

export default CategoryTable