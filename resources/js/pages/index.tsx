import React from 'react'
import NavigationBar from '@/components/navigation_bar';
import HomeBody from '@/components/Home/home_body';
import HomeFooter from '@/components/Home/home_footer';
import { useSetRecoilState } from 'recoil';
import { itemsState } from '@/states/items';

const index:React.FC = (props) => {
  const { items }:any = props
  console.log(items)
  const setItems = useSetRecoilState(itemsState);
  setItems(items)
  return (
    <>
      <NavigationBar />
      <HomeBody />
      <HomeFooter />
    </>
  );
}

export default index