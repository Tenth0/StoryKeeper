import React from 'react'
import InputForm from '@/components/input_form';
import NavigationBar from '@/components/navigation_bar';
import PaginationBar from '@/components/pagination_bar';
import Cards from '@/components/cards';

const index = () => {
  return (
    <>
      <NavigationBar />
      <InputForm />
      <Cards />
      <PaginationBar />
    </>
  );
}

export default index