import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider/Divider";
import Typography from "@material-ui/core/es/Typography/Typography";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import PersonFilterForm from "./PersonFilterForm";
import * as request from "../../../commons/request";

const drawerWidth = 400;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  drawerContext: {
    alignItems: "center",
    padding: "15px",
    justifyContent: "flex-start"
  }
});

class PersonFilterDrawer extends Component {
  state = {
    loading: true,
    positions:[]
  };

  componentDidMount() {
    this.fetchOptions();
  }

  fetchOptions = () => {
    this.setState({ loading: true });
    Promise.all([
      this.fetchPositions()
    /*  this.fetchAccountants(),
      this.fetchBuildings(),
      this.fetchMakers(),
      this.fetchOfficers(),
      this.fetchRooms(),
      this.fetchStates()*/
    ]).then(() => {
      this.setState({ loading: false });
    });
  };

  fetchPositions = () =>
    new Promise(resolve => {
      request.get("position/all").then(positions => {
        positions.unshift(null);
        this.setState({ positions });
        resolve();
      });
    });

  /*fetchBuildings = () =>
    new Promise(resolve => {
      request.get("building/all").then(buildings => {
        buildings.unshift(null);
        this.setState({ buildings });
        resolve();
      });
    });

  fetchMakers = () =>
    new Promise(resolve => {
      request.get("object/maker/all").then(makers => {
        makers.unshift(null);
        this.setState({ makers });
        resolve();
      });
    });

  fetchOfficers = () =>
    new Promise(resolve => {
      request.get("officer/all").then(officers => {
        officers.unshift(null);
        this.setState({ officers });
        resolve();
      });
    });

  fetchRooms = () =>
    new Promise(resolve => {
      request.get("room/number/all").then(rooms => {
        rooms.unshift(null);
        this.setState({ rooms });
        resolve();
      });
    });

  fetchStates = () =>
    new Promise(resolve => {
      request.get("object/state/all").then(states => {
        states.unshift(null);
        this.setState({ states });
        resolve();
      });
    });*/

  render() {
    const { classes, theme, open, onClose, onSubmit, filter } = this.props;
    const { loading, ...options } = this.state;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <div className={classes.drawerHeader}>
          <IconButton onClick={onClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Typography variant="h5">Фильтр</Typography>
        </div>
        <Divider />
        <div className={classes.drawerContext}>
          {loading ? (
            <CircularProgress className={classes.progress} />
          ) : (
            <PersonFilterForm
              initial={filter}
              {...options}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PersonFilterDrawer);
