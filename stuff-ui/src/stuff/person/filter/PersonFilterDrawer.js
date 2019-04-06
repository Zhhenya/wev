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
    positionDtos:[]
  };

  componentDidMount() {
    console.log("DIDIIDIDIDIIDIDIIDMOUNT");
    this.fetchOptions();
  }

  fetchOptions = () => {
    this.setState({ loading: true });
    Promise.all([
      this.fetchPositions()
    ]).then(() => {
      this.setState({ loading: false });
    });
  };

  fetchPositions = () =>
    new Promise(resolve => {
      request.get("position/all").then(positionDtos => {
        positionDtos.unshift(null);
        console.log(22222222222222, positionDtos);
        this.setState({ positionDtos });
        resolve();
      });
    });

  render() {
    const { classes, theme, open, onClose, onSubmit, filter } = this.props;
    const { loading, ...options } = this.state;
    console.log(1111111111111111111, options);

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
