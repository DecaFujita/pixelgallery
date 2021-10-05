import React, { useContext } from 'react';
import NavBar from './components/NavBar.component';
import Gallery from './components/Gallery.component';
import { GalleryContext } from './contexts/GalleryContext'

const PageContent = props => {
    const { state } = useContext(GalleryContext)
    return(
        <div>
            <NavBar/>
            <Gallery />
            
        </div>
    )
};

export default PageContent;