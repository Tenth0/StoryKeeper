import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useRecoilValue } from "recoil";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";
import { useTranslation } from "react-i18next";
import HandleModalShow from "./category_delete";

const CategoryList: React.FC = () => {
    const categories = useRecoilValue(categoriesState);
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
                                onBlur={() => setEditTitle(null)}
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
