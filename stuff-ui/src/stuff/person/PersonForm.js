import React, {Component} from "react";
import {uniqueId} from "lodash";
import * as request from "../../commons/request";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {withStyles} from "@material-ui/core";
import {withRouter} from "react-router";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import PersonFilterForm from "./filter/PersonFilterForm";
import FilterList from "@material-ui/icons/FilterList";
import SimpleAlertDialog from "../../components/SimpleAlertDialog";
import Grid from "@material-ui/core/Grid";

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
  {title: "Имя", key: uniqueId(), property: "firstName"},
  {title: "Фамилия", key: uniqueId(), property: "surname"},
  {title: "Академический титул", key: uniqueId(), property: "academicTitle"},
  {title: "Биография", key: uniqueId(), property: "biography"},
  {title: "Интересы", key: uniqueId(), property: "interests"},
  {title: "Должность", key: uniqueId(), property: "position"}
];

const INITIAL_FILTER = {
  firstName: null,
  surname: null,
  academicTitle: null,
  biography: null,
  interests: null,
  positionDto: null,
};


class PersonForm extends Component {
  state = {
    loading: false,
    deleted: false,
    error: null,
    persons: [],
    positions: [],
    //   objects:[],
    filter: INITIAL_FILTER
  };

  componentDidMount() {
    console.log("didMount");
    //   this.fetchPerson();
    this.fetchPosition();
    this.fetchFilteredData();
  }

  fetchPerson = () => {
    request.get("person/all").then(persons => {
      console.log(1111, persons);
      this.setState({persons});
    });
  };

  fetchPosition = () => {
    request.get("position/all").then(positions => {
      console.log(1111, positions);
      this.setState({positions});
    });
  };


  fetchFilteredData = () => {
    console.log("filer");
    request
      .post("person/filtered", this.state.filter)
      .then(persons => {
        this.setState({persons});
        console.log(1111, this.state.filter);
      })
      .catch(error => {
        this.setState({error});
      });
  };

  editPerson = id => {
    console.log(id);
    this.props.history.push("/person/edit/" + id);
  };

  createPerson = () => {
    this.props.history.push("/person/add");
  };

  deletePerson = obj => {
    request
      .post("/person/delete", obj)
      .then(() => {
        console.log(7777, this.state.deleted);
        this.setState({deleted: true});
        console.log(9999, this.state.deleted);
        this.fetchPerson();
      })
      .catch(error => {
        this.setState({error});
      });
  };

  changeFilterVisibility = () => {
    this.setState({isFilterVisible: !this.state.isFilterVisible});
  };

  render() {
    const {persons, deleted, error, filter, isFilterVisible, positions} = this.state;
    const {classes} = this.props;


    console.log(2222, this.state.persons);
    return (
      <>
        {error && (
          <SimpleAlertDialog
            open={error}
            title="Произошла ошибка"
            content={error}
            onClose={() => {
              this.setState({error: null});
            }}
          />
        )}
        <PersonFilterForm
          open={isFilterVisible}
          filter={filter}
          onClose={this.changeFilterVisibility}
          onSubmit={filter => {
            this.setState({filter});
          }}
        />
        <Grid container>
          <Grid item xs={12}>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Преподаватели
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={this.changeFilterVisibility}
                className={classes.button}
              >
                Фильтр
                <FilterList className={classes.rightIcon}/>
              </Button>
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
                  {persons.map(person => (
                    <TableRow
                      hover
                      key={person.id}
                      onDoubleClick={() => this.editPerson(person.id)}
                    >
                      <TableCell component="th" scope="row" width="10%">
                        {person.firstName}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {person.surname}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {person.academicTitle}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {person.biography}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {person.interests}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {person.positionDto.name}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => this.deletePerson(person)}
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
              onClick={this.createPerson}
              className={classes.button}
            >
              Добавить
              <AddIcon className={classes.rightIcon}/>
            </IconButton>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(PersonForm));