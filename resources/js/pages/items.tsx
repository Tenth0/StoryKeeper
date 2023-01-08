import React, { useEffect } from "react";
import NavigationBar from "@/components/navigation_bar";
import HomeBody from "@/components/Home/home_body";
import HomeFooter from "@/components/Home/home_footer";
import { useSetRecoilState } from "recoil";
import { itemsState } from "@/states/items";
import { categoriesState } from "@/states/categories";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Items: React.FC<{}> = ({ items, categories }: any) => {
    // 型
    const setItems = useSetRecoilState(itemsState);
    const setCategories = useSetRecoilState(categoriesState);
    useEffect(() => {
        setItems(items);
        setCategories(categories);
    }, [items, categories]);
    return (
        <>
            <NavigationBar />
            <Link to="/insert_item">
                <Button>
                    aaaaaaaaaa
                </Button>
            </Link>
            <HomeBody />
            <HomeFooter />
        </>
    );
};

export default Items;
