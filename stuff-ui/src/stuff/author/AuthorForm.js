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
  {title: "Автор", key: uniqueId(), property: "person"},
  {title: "Публикация", key: uniqueId(), property: "publication"}
];

class AuthorForm extends Component {

  state = {
    authors: [],
    deleted: false,
    error: null,
    loading: false
  };

  componentDidMount() {
    this.fetchAuthor();
  }

  fetchAuthor = () => {
    request.get("author/all").then(authors => {
      console.log(7676, authors);
      this.setState({authors: authors});
    });
  };

  editAuthor = id => {
    console.log(id);
    this.props.history.push("/author/edit/" + id);
  };

  createAuthor = () => {
    this.props.history.push("/author/add");
  };

  deleteAuthor = obj => {
    request
      .post("/author/delete", obj)
      .then(() => {
        console.log(7777, this.state.deleted);
        this.setState({ deleted: true });
        console.log(9999, this.state.deleted);
        this.fetchAuthor();
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render(){
    const{authors} = this.state;
    const{classes} = this.props;

    return(
      <>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Авторы и их публикации
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
              {authors.map(author => (
                <TableRow
                  hover
                  key={author.id}
                  onDoubleClick={() => this.editAuthor(author.id)}
                >
                  <TableCell component="th" scope="row" width="10%">
                    {author.personDto.surname}
                  </TableCell>
                  <TableCell component="th" scope="row" width="10%">
                    {author.publicationDto.content}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.deleteAuthor(author)}
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
          onClick={this.createAuthor}
          className={classes.button}
        >
          Добавить
          <AddIcon className={classes.rightIcon}/>
        </IconButton>
      </>
    );
  }

}

export default withStyles(styles)(withRouter(AuthorForm));