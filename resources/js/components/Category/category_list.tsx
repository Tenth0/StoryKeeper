import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useRecoilValue } from "recoil";
import { categoriesState } from "@/states/categories";
import { Category } from "@/types";
import { useTranslation } from "react-i18next";
import HandleModalShow from "./category_delete";

const CategoryList: React.FC = () => {
    const categories = useRecoilValue(categoriesState)
    const { t } = useTranslation()
    useEffect(() => {
        console.log(categories)
    }, [categories])

    if (!Array.isArray(categories)) {
        return null
    }

    const CategoryTable = () => {
        return categories.map((category: Category, idx: number) => (
            <tr key={category.id}>
                <td width={"5%"}>{idx + 1}</td>
                <td width={"5%"}>
                    <HandleModalShow id={(category.id)}>

                    </HandleModalShow>
                </td>
                <td>{category.title}</td>
                <td>{t(`color.${category.color}`)}</td>
            </tr>
        ))
    }

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
                <tbody>{CategoryTable()}</tbody>
            </Table>
        </>
    )
}

export default CategoryList
