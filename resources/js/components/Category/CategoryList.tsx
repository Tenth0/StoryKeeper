import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";
import { useTranslation } from "react-i18next";
import { Button, Table } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import axios from "axios";
import styled from "styled-components";
import HandleModalShow from "./CategoryDelete";
import ToastError from "../Toast/ToastError";

const Center = styled.div`
    text-align: center;
`;

const FontWhiteColor = styled.div`
    color:white;
`;

const CategoryList: React.FC = () => {
    const [categories, setCategories] = useRecoilState(categoriesState);
    const [editTitle, setEditTitle] = useState<number | null>(null);
    const [isChangeTitle, setIsChangeTitle] = useState<boolean>(false);
    const [categoryTitles, setCategoryTitles] = useState<
        Record<number, string>
    >({});
    const { t } = useTranslation();
    // トーストを表示させるステート
    const [showToastError, setShowToastError] = useState<boolean>(false);  

    if (!Array.isArray(categories)) {
        return null;
    }

    const changeTitle = (
        id: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newTitle = event.target.value;
        if (newTitle === categoryTitles[id]) {
            setIsChangeTitle(false);
        }
        if (newTitle !== categoryTitles[id]) {
            setIsChangeTitle(true);
        }
        setCategoryTitles({ ...categoryTitles, [id]: newTitle });
    };

    const updateCategory = (id: number) => {
        if (categoryTitles[id] === "") {
            return;
        }
        setEditTitle(null);
        setIsChangeTitle(false);
        const updatedCategory = categories.map((category) => {
            return category.id === id
                ? { ...category, title: categoryTitles[id] }
                : category;
        });
        setCategories(updatedCategory);
        axios
            .post("/categories/update", { id: id, title: categoryTitles[id] })
            .then()
            .catch(() => {
                setShowToastError(true);
                setTimeout(() => setShowToastError(false), 3000);
            });
    };

    return (
        <>
            <ToastError show={showToastError}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><FontWhiteColor>#</FontWhiteColor></th>
                        <th><FontWhiteColor>削除</FontWhiteColor></th>
                        <th colSpan={2}><FontWhiteColor>タイトル</FontWhiteColor></th>
                        <th><FontWhiteColor>カラー</FontWhiteColor></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category: Category, idx: number) => (
                        <tr key={category.id}>
                            <td width={"5%"}><FontWhiteColor>{idx + 1}</FontWhiteColor></td>
                            <td width={"5%"}>
                                <FontWhiteColor>
                                    <HandleModalShow id={category.id} />
                                </FontWhiteColor>
                            </td>
                            <td
                                onBlur={() => {
                                    isChangeTitle
                                        ? updateCategory(category.id)
                                        : setEditTitle(null);
                                }}
                            >
                                {editTitle === category.id ? (
                                    <input
                                    type="text"
                                    value={
                                        categoryTitles[category.id] !==
                                        undefined
                                        ? categoryTitles[category.id]
                                        : category.title
                                    }
                                    onChange={(event) =>
                                        changeTitle(category.id, event)
                                    }
                                    ></input>
                                    ) : (
                                    <FontWhiteColor>
                                       { category.title }
                                    </FontWhiteColor>
                                        )}
                            </td>
                            <td width={"10%"}>
                                <Center>
                                    <Button
                                        variant="black"
                                        onClick={() =>
                                            setEditTitle(category.id)
                                        }
                                        >
                                        <FontWhiteColor>
                                        <BsPencil />
                                        編集
                                        </FontWhiteColor>
                                    </Button>
                                </Center>
                            </td>
                            <td><FontWhiteColor>{t(`color.${category.color}`)}</FontWhiteColor></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default CategoryList;
