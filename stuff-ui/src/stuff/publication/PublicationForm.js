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

const styles = () => ({
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
  // rightIcon: {
  //   marginLeft: theme.spacing.unit
  // }
});

const columns = [
  {title: "Название", key: uniqueId(), property: "content"}
];

class PublicationForm extends Component {

  state = {
    publications: [],
    deleted: false,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchPublication();
  }

  fetchPublication = () => {
    request.get("publication/all").then(publications => {
      this.setState({publications: publications});
    });
  };

  editPublication = id => {
    console.log(id);
    this.props.history.push("/publication/edit/" + id);
  };

  createPublication = () => {
    this.props.history.push("/publication/add");
  };

  deletePublication = obj => {
    request
      .post("/publication/delete", obj)
      .then(() => {
        console.log(7777, this.state.deleted);
        this.setState({ deleted: true });
        console.log(9999, this.state.deleted);
        this.fetchPublication();
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render(){
    const{publications} = this.state;
    const{classes} = this.props;

    return(
      <>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Список Публикаций
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
              {publications.map(publication => (
                <TableRow
                  hover
                  key={publication.id}
                  onDoubleClick={() => this.editPublication(publication.id)}
                >
                  <TableCell component="th" scope="row" width="10%">
                    {publication.content}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.deletePublication(publication)}
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
          onClick={this.createPublication}
          className={classes.button}
        >
          Добавить
          <AddIcon className={classes.rightIcon}/>
        </IconButton>
      </>
    );
  }

}

export default withStyles(styles)(withRouter(PublicationForm));