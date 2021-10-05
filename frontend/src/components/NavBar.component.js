import React from 'react';
import { withStyles } from '@material-ui/styles';
import { DESKTOP_WIDTH } from '../assets';

const styles = {
    navbar: {
        backgroundColor: 'grey',
        height: '5vh'
    },
    container: {
        width: DESKTOP_WIDTH,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    logo: {
        fontSize: '24px'
    },
    menu: {
        '& a': {
            marginLeft: '15px'
        }
    }
}

const NavBar = props => {
    const { classes } = props
    return(
        <div>
            <div className={classes.navbar}>
                <div className={classes.container}>
                    <div className={classes.logo}>PixelArtGallery</div>
                    <div className={classes.menu}>
                        <a>Home</a>
                        <a>Cathegories</a>
                        <a>Artists</a>
                        <a>Newest</a>
                        <a>Sign In</a>
                        <a>Sign Up</a>
                    </div>
                </div>
                
            </div>
            <div className='gallery'>
                <div className='gallery-item'/>
                <div className='gallery-item'/>
                <div className='gallery-item'/>
                <div className='gallery-item'/>
                <div className='gallery-item'/>
            </div>
        </div>
    )
};

export default withStyles(styles)(NavBar);