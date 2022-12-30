import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const InputForm:React.FC = () => {
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
            <option value="1">漫画</option>
            <option value="2">アニメ</option>
            <option value="3">お菓子</option>
            <option value="3">ごはん屋さん</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
  );
}

export default InputForm;