import React, { createContext, useState } from "react";
import { seedColors } from "../assets";

const inicial_val = [{id: 1, name:'deca'}]


export const GalleryContext = createContext();

export const GalleryProvider = props => {
    const [ state, setstate ] = useState(inicial_val);

    return (
        <GalleryContext.Provider value={{ state }}>
            {props.children}
        </GalleryContext.Provider>
    )
};
