import React from 'react'
import InputForm from '@/components/input_form';
import NavigationBar from '@/components/navigation_bar';
import PaginationBar from '@/components/pagination_bar';
import Cards from '@/components/cards';
import styled from 'styled-components';

const index = () => {
  const Space = styled.div`
    margin: 16px;
  `;

  const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
  `;

  return (
    <>
      <NavigationBar />
      <Space>
        <InputForm />
      </Space>
      <Cards />
      <Pagination>
        <PaginationBar />
      </Pagination>
    </>
  );
}

export default index