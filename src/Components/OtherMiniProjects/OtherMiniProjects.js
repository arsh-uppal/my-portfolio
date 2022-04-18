import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from "@material-ui/icons/Home";
import StarBorderSharpIcon from "@material-ui/icons/StarBorderSharp";
import clsx from "clsx";
import React, { useEffect } from "react";
import {
  Link,
  MemoryRouter,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import LandingOtherMiniProjects from "./LandingOtherMiniProjects";
import StarRating from "./StarRating";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

export default function OtherMiniProjects(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerChange = () => {
    setOpen(!open);
  };

  useEffect(() => {
    props.hadleHideNav(true);
  }, [props]);

  const history = useHistory();

  return (
    <MemoryRouter>
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerChange}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <List>
            <Link to="starrating" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <StarBorderSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Star Rating" />
              </ListItem>
            </Link>
            <ListItem
              button
              onClick={() => {
                props.hadleHideNav(false);
                history.push("/");
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <Switch>
            <Route path={"/starrating"} component={StarRating} />
            <Route path={"/"} component={LandingOtherMiniProjects} />
          </Switch>
        </main>
      </div>
    </MemoryRouter>
  );
}
