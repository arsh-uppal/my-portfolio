import React from 'react';
import Collapsible from './Collapsible';
import Footer from '../Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './playground.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    gridItemDiv: {
        height: '100%',
        width: '100%'
    }
}));

export default function Playground() {

    const style = {
        backgroundColor: 'hsl(164, 22%, 90%)',
        height: 80,
    }

    const classes = useStyles();

    return (
        <div style={{ backgroundColor: 'hsl(164, 22%, 90%)', }} >
            <div style={style}>
            </div>
            <div>
                <Collapsible collapsibleName="3D Transforms" collapsedStatus={true} style={{border:'solid'}}>
                    <Grid container spacing={5} style={{}}>
                        <Grid item sm={4} xs={12} >
                            <div className={classes.gridItemDiv}>
                                <Paper elevation={3} >
                                        <div class="square x-axis">x-axis</div>
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className={classes.gridItemDiv}>
                                <Paper elevation={3} >
                                    <div class="square y-axis">y-axis</div>   
                                </Paper>
                            </div>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <div className={classes.gridItemDiv}>
                                <Paper elevation={3} style={{perspective: "10em"}}>
                                    <div class="square z-axis">z-axis</div>    
                                </Paper>
                            </div>
                        </Grid>
                    </Grid>
                </Collapsible>
            </div>
            <Grid item xs={12} className="footer">
                <Footer />
            </Grid>
        </div>
    );
}