import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { categoriesState } from "@/states/categories";
import { itemsState } from "@/states/items";
import { Category } from "@/types";
import axios from "axios";

const InputForm: React.FC = () => {
  const categories = useRecoilValue(categoriesState);
  const setItems = useSetRecoilState(itemsState);
    if (!Array.isArray(categories)) {
        return null;
    }
    
    const searchRecord = () => {
      const titleKeyword: string =
      document.getElementById("title_keyword")!.value;
      const selectCategory: string =
      document.getElementById("select_category")!.value;
      const selectCategoryId = selectCategory ? parseInt(selectCategory) : "";
      axios.get(
        "/search?title_keyword=" +
        titleKeyword +
        "&select_category=" +
        selectCategoryId
        )
        .then((items) => setItems(items.data))
        .catch((error) => console.error(error));
    };

    return (
        <Row className="g-2">
            <Col md>
                <FloatingLabel label="タイトル">
                    <Form.Control
                        id="title_keyword"
                        type="text"
                        placeholder="例:ノーゲーム・ノーライフ、キングダム"
                        onBlur={() => searchRecord()}
                    />
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="カテゴリー"
                >
                    <Form.Select
                        id="select_category"
                        onChange={() => searchRecord()}
                    >
                        <option></option>
                        {categories.map((category: Category) => (
                            <option key={category.id} value={category.id}>
                                {category.title}
                            </option>
                        ))}
                    </Form.Select>
                </FloatingLabel>
            </Col>
        </Row>
    );
};

export default InputForm;
