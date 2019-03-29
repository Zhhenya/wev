import React, {Component} from "react";
import {uniqueId} from "lodash";
import * as request from "../../commons/request";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import {withStyles} from "@material-ui/core";
import {withRouter} from "react-router";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  // button: {
  //   margin: theme.spacing.unit * 4
  // },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const columns = [
  {title: "Название", key: uniqueId(), property: "name"}
];

class PositionForm extends Component {

  state = {
    positions: [],
    deleted: false,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchPosition();
  }

  fetchPosition = () => {
    request.get("position/all").then(positions => {
      this.setState({positions});
    });
  }

  editPosition = id => {
    console.log(id);
    this.props.history.push("/position/edit/" + id);
  };

  createPosition = () => {
    this.props.history.push("/position/add");
  };

  deletePosition = obj => {
    request
      .post("/position/delete", obj)
      .then(() => {
        console.log(7777, this.state.deleted);
        this.setState({ deleted: true });
        console.log(9999, this.state.deleted);
        this.fetchPosition();
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render(){
    const{positions} = this.state;
    const{classes} = this.props;

    return(
      <>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Список Должностей
          </Typography>
        </Toolbar>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell key={column.key}>{column.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {positions.map(position => (
                <TableRow
                  hover
                  key={position.id}
                  onDoubleClick={() => this.editPosition(position.id)}
                >
                  <TableCell component="th" scope="row" width="10%">
                    {position.name}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.deletePosition(position)}
                    >
                      Удалить
                      <DeleteIcon className={classes.rightIcon}/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <IconButton
          variant="contained"
          color="primary"
          onClick={this.createPosition}
          className={classes.button}
        >
          Добавить
          <AddIcon className={classes.rightIcon}/>
        </IconButton>
      </>
    );
  }

}

export default withStyles(styles)(withRouter(PositionForm));