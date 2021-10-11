import React from "react";
import AddNew from './components/AddNew.component';
import Gallery from './components/Gallery.component';
import NavBar from './components/NavBar.component';
import { GalleryProvider } from './contexts/GalleryContext';
import { Route, Switch } from 'react-router-dom';
import { DESKTOP_WIDTH } from './assets';

const App = () => {
  return (
    <GalleryProvider>
      <div style={{height:'100vh'}}>
        <NavBar/>
        <div style={{width: DESKTOP_WIDTH, margin: '0 auto'}}>
          <Switch>
            <Route 
              exact
              path='/'
              render={() => <Gallery />}
            />
            <Route 
              exact
              path='/add'
              render={() => <AddNew />}
            />
          </Switch>
        </div>
      </div>
    </GalleryProvider>
  );
}

export default App;
