import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useRecoilState } from "recoil";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";
import { useTranslation } from "react-i18next";
import axios from "axios";
import HandleModalShow from "./category_delete";

const CategoryList: React.FC = () => {
    const [categories, setCategories] = useRecoilState(categoriesState);
    const [editTitle, setEditTitle] = useState<number | null>(null);
    const [categoryTitles, setCategoryTitles] = useState<
        Record<number, string>
    >({});
    const { t } = useTranslation();
    useEffect(() => {
        console.log(categories);
    }, [categories]);

    if (!Array.isArray(categories)) {
        return null;
    }

    const changeTitle = (
        id: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newTitle = event.target.value;
        setCategoryTitles({ ...categoryTitles, [id]: newTitle });
    };

    const updateCategory = (id: number) => {
        setEditTitle(null);
        const updatedCategory = categories.map((category) =>
            category.id === id
                ? { ...category, title: categoryTitles[id] }
                : category
        );
        // 型
        setCategories(Object.values(updatedCategory));
        axios
        .post("/categories/update", { id: id,title: categoryTitles[id] })
        .then((res) => console.log(res.data))
        .catch((error) => console.error(error))
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>削除</th>
                        <th>タイトル</th>
                        <th>カラー</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category: Category, idx: number) => (
                        <tr key={category.id}>
                            <td width={"5%"}>{idx + 1}</td>
                            <td width={"5%"}>
                                <HandleModalShow id={category.id} />
                            </td>
                            <td
                                onDoubleClick={() => setEditTitle(category.id)}
                                onBlur={() => updateCategory(category.id)}
                            >
                                {editTitle === category.id ? (
                                    <input
                                        type="text"
                                        value={
                                            categoryTitles[category.id] ||
                                            category.title
                                        }
                                        onChange={(event) =>
                                            changeTitle(category.id, event)
                                        }
                                    ></input>
                                ) : (
                                    category.title
                                )}
                            </td>
                            <td>{t(`color.${category.color}`)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default CategoryList;
