import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './collapsible.css';
const useStyles = makeStyles(theme => ({
    root: {
        width: '85%',
        margin: 'auto',
        marginBottom: '2%',
    }
}));

export default function Collapsible(props) {
    const classes = useStyles();
    const [collapsedStatus, setCollapsedStatus] = useState(props.collapsedStatus);
    
    const handleCollapsedStatus = ()=> {
        setCollapsedStatus(!collapsedStatus)
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={collapsedStatus} onClick={handleCollapsedStatus}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className="collapsibleHeader">{props.collapsibleName}</span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}
