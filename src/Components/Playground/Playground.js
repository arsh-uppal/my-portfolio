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
        backgroundColor: '#f1f1f1',
        height: 80,
    }

    const classes = useStyles();

    return (
        <div style={{ backgroundColor: '#f1f1f1', }} >
            <div style={style}>
            </div>
            <div>
                <Collapsible collapsibleName="Animations - 3D Transforms" collapsedStatus={true} style={{border:'solid'}}>
                    <Grid container spacing={5} style={{}}>
                        <Grid item sm={4} xs={12} >
                            <div className={classes.gridItemDiv}>
                                <Paper elevation={3}>
                                        <div className="square x-axis">
                                            <div className="x-axis-text">x-axis</div>
                                        </div>
                                </Paper>
                            </div>
                        </Grid>
                        
                        <Grid item sm={4} xs={12}>
                            <div className={classes.gridItemDiv}>
                                <Paper elevation={3} style={{perspective: "10em"}}>
                                    <div className="square z-axis" style={{perspective: "10em"}}>
                                        <div className="z-axis-text">z-axis</div>
                                    </div>    
                                </Paper>
                            </div>
                        </Grid>

                        <Grid item sm={4} xs={12}>
                            <div className={classes.gridItemDiv}>
                                <Paper elevation={3} >
                                    <div className="square y-axis">
                                        <div className="y-axis-text">y-axis</div>
                                    </div>   
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