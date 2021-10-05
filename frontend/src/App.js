import React from "react";
import PageContent from './PageContent';
import { GalleryProvider } from './contexts/GalleryContext';


const App = () => {
  return (
    <GalleryProvider>
      <PageContent />
    </GalleryProvider>
    
  );
}

export default App;
