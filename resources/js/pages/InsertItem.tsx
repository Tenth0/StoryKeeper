import React, { useEffect } from "react";
import InsertItemBody from "@/components/Item/InsertItemBody";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../states/categories";
import { Category } from "../types";
import ReloadNavigationBar from "@/components/ReloadNavigationBar";
import AnimationTransition from "../Utils";

const InsertItem: React.FC<{}> = ({ categories }: any) => {
    if (categories) {
        const setCategories = useSetRecoilState(categoriesState);
        useEffect(() => {
            setCategories(categories);
        }, [categories]);
        return (
            <>
                <ReloadNavigationBar />
                <InsertItemBody />
            </>
        );
    }
    return (
        <>
            <AnimationTransition>
                <InsertItemBody />
            </AnimationTransition>
        </>
    );
};

export default InsertItem;
