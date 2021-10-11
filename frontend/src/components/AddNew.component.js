import React, { useContext, useState } from 'react';
import { GalleryContext } from '../contexts/GalleryContext';
import Pixel from './Pixel';
import { withStyles } from '@material-ui/styles';
import { PIXEL_SQ, PIXEL_SIZE } from '../assets';
import { withRouter } from 'react-router';

const styles = {
    grid: {
        maxHeigth: PIXEL_SQ * PIXEL_SIZE + PIXEL_SIZE + 15,
        maxWidth: PIXEL_SQ * PIXEL_SIZE + PIXEL_SIZE + 15,
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid black'
    },
    column: {
        display: 'flex'
    },
    form: {
        marginLeft: '50px',
        '& div': {
            marginBottom: '20px'
        },
        '& label': {
            marginRight: '5px'
        },
        '& input': {
            border: 'none',
            borderBottom: '1px solid grey'
        },
        '& select': {
            border: 'none',
            borderBottom: '1px solid grey'
        },
        '& button': {
            borderRadius: '50px',
            border: 'none',
            backgroundColor: 'grey',
            marginRight: '5px',
            padding: '10px 20px',
            color: 'white'
        }
    }
}

const AddNew = props => {
    const { artList, saveNewArt } = useContext(GalleryContext);
    const pixelGrid = new Array(PIXEL_SQ * PIXEL_SQ).fill(true);
    const [ art, setArt ] = useState(pixelGrid);
    const { classes } = props;

    const toggle = (index, value) => {
        let newArt = art.map(a => a);
        newArt.splice(index, 1, !value )
        setArt(newArt);
    }

    const handleSave = (art) => {
        saveNewArt(art);
        props.history.push('/');
    }

    console.log(artList)
    return (
        <div>
            <h1>Create a new pixelart</h1>
            <div className={classes.column}>
                <div className={classes.grid}>
                    {art.map((pixel, index) => <Pixel key={`pix-${index}`} index={index} on={pixel} handleClick={toggle}/>)}
                </div>
                <div>
                    <form action='/action_page.php' className={classes.form}>
                        <div>
                            <label for='art-title'>Title:</label>
                            <input id='art-title' type='text' placeholder='Name your pixelart!' />
                        </div>
                        {/* <div>
                            <label for='cathegories'>Cathegories:</label>
                            <select id='cathegories' name='cathegories'>
                                <option value='arcade'>Arcade</option>
                                <option value='abstract'>Abstract</option>
                                <option value='cute'>Cute</option>
                                <option value='geometric'>Geometric</option>
                                <option value='other'>Other</option>
                            </select>
                        </div> */}
                        <div onClick={() => handleSave(art)}>Save</div>
                        <button>Cancel</button>
                    </form>
                </div>
            </div>
        </div> 
    )
};

export default withRouter(withStyles(styles)(AddNew));