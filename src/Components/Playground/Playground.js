import React from 'react';
import Collapsible from './Collapsible';
import Footer from '../Footer/Footer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
}));

export default function Playground() {

    const style = {
        backgroundColor:'hsl(164, 22%, 90%)',
        height:80,
    }

    const classes = useStyles();

    return (
        <div style={{backgroundColor:'hsl(164, 22%, 90%)',}} >
            <div style={style}>
            </div>
            <Collapsible collapsibleName="first" collapsedStatus={true}>
                    <Grid item xs={12}  style={{backgroundColor:'hsl(164, 22%, 90%)',height:100}}>
                        Yo
                    </Grid>
                    <Grid item xs={12}  style={{backgroundColor:'hsl(164, 22%, 90%)',height:100}}>
                        Yo
                    </Grid>
                    <Grid item xs={12}  style={{backgroundColor:'hsl(164, 22%, 90%)',height:100}}>
                        Yo
                    </Grid>
                
            </Collapsible>
            
            <Grid item xs={12} className="footer">
                <Footer />
            </Grid>
        </div>
    );
}