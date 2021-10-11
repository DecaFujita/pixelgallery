import React, { createContext, useState } from "react";
import { INICIAL_VAL } from '../assets';
const GalleryContext = createContext();
import { uuid } from 'uuidv4';
import useAPI from '../hooks/useAPI';
import useLocalStorage from '../hooks/useLocalStorageState';

const GalleryProvider = props => {
    const [ artList, setArtList ] = useAPI(INICIAL_VAL);

    const saveNewArt = value => {
        setArtList([...artList, { id: uuid(), name: 'deca', likes: 0, pixelart: value }]);
    }
    return (
        <GalleryContext.Provider value={{artList, saveNewArt}}>
            {props.children}
        </GalleryContext.Provider>
    )
};

export {GalleryContext, GalleryProvider};