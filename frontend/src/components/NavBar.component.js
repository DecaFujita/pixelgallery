import React from 'react';
import { withStyles } from '@material-ui/styles';
import { DESKTOP_WIDTH } from '../assets';
import { Link } from 'react-router-dom';

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
        fontSize: '24px',
        color: 'white',
        '& span': {
            color: 'yellow'
        }
    },
    menu: {
        '& a': {
            marginLeft: '15px',
            textDecoration: 'none',
            color: 'white'
        }
    }
}

const NavBar = props => {
    const { classes } = props
    return(
        <div>
            <div className={classes.navbar}>
                <div className={classes.container}>
                    <div className={classes.logo}><span>PixelArt</span>Gallery</div>
                    <div className={classes.menu}>
                        <Link to='/'>Home</Link>
                        <Link to='/cathegories'>Cathegories</Link>
                        <Link to='/artists'>Artists</Link>
                        <Link to='/newest'>Newest</Link>
                        <Link to='/signin'>Sign In</Link>
                        <Link to='/signup'>Sign Up</Link>
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