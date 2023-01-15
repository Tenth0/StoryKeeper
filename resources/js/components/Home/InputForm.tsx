import React, { useEffect, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { categoriesState } from "@/states/categories";
import { itemsState } from "@/states/items";
import { Category } from "@/types";
import axios from "axios";
import ToastError from "../Toast/ToastError";

const InputForm: React.FC = () => {
    const [titleKeyword, setTitleKeyword] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = useRecoilValue(categoriesState);
    const setItems = useSetRecoilState(itemsState);
    // トーストを表示させるステート
    const [showToastError, setShowToastError] = useState<boolean>(false);

    const searchRecord = async () => {
        try {
            const items = await axios.get(
                "/items/search?title_keyword=" +
                    titleKeyword +
                    "&select_category=" +
                    selectedCategory
            );
            setItems(items.data);
        } catch (error) {
            setShowToastError(true);
            setTimeout(() => setShowToastError(false), 3000);
        }
    };

    useEffect(() => {
        searchRecord();
    }, [titleKeyword, selectedCategory]);

    if (!Array.isArray(categories)) {
        return null;
    }

    return (
        <>
            <ToastError show={showToastError} />
            <Row className="g-2">
                <Col md>
                    <FloatingLabel label="タイトル">
                        <Form.Control
                            id="title_keyword"
                            type="text"
                            placeholder="例:ノーゲーム・ノーライフ、キングダム"
                            onBlur={() =>
                                setTitleKeyword(
                                    (document.getElementById("title_keyword") as HTMLInputElement).value
                                )
                            }
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
                            onChange={() =>
                                setSelectedCategory(
                                    (document.getElementById("select_category") as HTMLSelectElement).value
                                )
                            }
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
        </>
    );
};

export default InputForm;
