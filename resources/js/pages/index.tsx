import React from 'react'
import InputForm from '@/components/input_form';
import NavigationBar from '@/components/navigation_bar';
import PaginationBar from '@/components/pagination_bar';
import Cards from '@/components/cards';
import styled from 'styled-components';

const index = () => {
  const Form = styled(InputForm)`
    margin: 16px;
  `;

  const Pagination = styled(PaginationBar)`
    display: flex;
    justify-content: center;
    margin-top: 8px;
  `;

  return (
    <>
      <NavigationBar />
      <Form />
      <Cards />
      <Pagination />
    </>
  );
}

export default index