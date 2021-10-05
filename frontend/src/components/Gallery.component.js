import React from 'react';
import GalleryItem from './GalleryItem.components';
import { withStyles } from '@material-ui/styles';
import { DESKTOP_WIDTH } from '../assets';

const styles = {
    gallery: {
        width: DESKTOP_WIDTH,
        margin: '30px auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}

const Gallery = props => {
    const { classes } = props
    return(
        <div className={classes.gallery}>
            <h1>Hello Gallery!</h1>
            {/* <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem /> */}
        </div>
    )
};

export default withStyles(styles)(Gallery);