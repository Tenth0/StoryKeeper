import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRecoilValue } from "recoil";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";

const InputForm: React.FC = () => {
  const categories = useRecoilValue(categoriesState);
  if (!Array.isArray(categories)) {
      return null;
  }
  console.log(categories)
  return (
    <Row className="g-2">
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="タイトル">
          <Form.Control type="text" placeholder="example:漫画、アニメ" />
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
          label="カテゴリー"
        >
          <Form.Select aria-label="Floating label select example">
            <option></option>
            {categories.map((category: Category) => (
              <option key={category.id}>{category.title}</option>
            ))}
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
  );
}

export default InputForm;
