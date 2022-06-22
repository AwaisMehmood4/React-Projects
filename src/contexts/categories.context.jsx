import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../shop-data";

import { getCtegoriesAndDocuments } from "../components/utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});




export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});


    useEffect(()=> {
       const getCategoriesMap = async () => {
        const categoryMap = await getCtegoriesAndDocuments();
        console.log(categoryMap);
        setCategoriesMap(categoryMap);
       } 
       getCategoriesMap();
    },[]);



    const value = {categoriesMap};

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
        )
}