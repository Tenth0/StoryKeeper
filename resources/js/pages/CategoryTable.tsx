import React, { useEffect } from "react";
import CategoryBody from "@/components/Category/CategoryBody";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../states/categories";
import ReloadNavigationBar from "@/components/ReloadNavigationBar";
import AnimationTransition from "../Utils";
import { Category } from '../types';

const CategoryTable: React.FC<{categories:Category[]}> = ({ categories }) => {
    if (categories) {
        const setCategories = useSetRecoilState(categoriesState);
        useEffect(() => {
            setCategories(categories);
        }, []);
        return (
            <>
                <ReloadNavigationBar />
                <CategoryBody />
            </>
        );
    }

    return (
        <>
            <AnimationTransition>
                <CategoryBody />
            </AnimationTransition>
        </>
    );
};

export default CategoryTable;
