import React from 'react'
import Table from 'react-bootstrap/Table';

const CategoryList:React.FC = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>#</th>
          <th>Title</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={"5%"}>1</td>
          <td width={"5%"}>ゴミ箱</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ゴミ箱</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ゴミ箱</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CategoryList