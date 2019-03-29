import React, {Component} from "react";
import * as request from "../../commons/request";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SimpleAlertDialog from "../../components/SimpleAlertDialog";
import {Form, Formik} from "formik";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import {withStyles} from "@material-ui/core";
import {withRouter} from "react-router";
import AutocompleteSelectField from "../../components/AutocompleteSelectField";

const styles = theme => ({
  root: {
    //flexGrow: 1
  },
  container: {
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit
  }
});

const INITIAL_VALUE = {
  personDto: null,
  publicationDto: null
};

const VALIDATION_SCHEME = {
  personDto: Yup.object().required("Поле должно быть заполнено"),
  publicationDto: Yup.object().required("Поле должно быть заполнено")
};


class AuthorChangesForm extends Component {
  state = {
    success: false,
    error: null,
    deleted: false,
    publications:[],
    persons: []
  };

  componentDidMount() {
    this.fetchPerson();
    this.fetchPublication();
  }

  fetchPublication = () => {
    request.get("publication/all").then(publications => {
      console.log(2222, publications);
      this.setState({publications: publications});
    });
  };

  fetchPerson = () => {
    request.get("person/all").then(persons => {
      console.log(1111, persons);
      this.setState({persons});
    });
  };

  closeFormThenSuccess = () => {
    this.props.history.goBack();
  };

  save = requestObj => {
    console.log(5555, requestObj);
    request.post("author/save", {
      ...requestObj
    })
      .then(() => {
        this.setState({success: true});
      })
      .catch(error => {
        console.log(80808, error);
        this.setState({error});
      })
  };

  closeErrorDialog = () => {
    this.setState({error: null});
  };

  render() {
    const {classes, initialValues, readOnly} = this.props;
    const {success, error, persons, publications} = this.state;
    return (
      <>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Изменение информации о соответствии публикации и автора
          </Typography>
          <div style={{flexGrow: 1}}/>
        </Toolbar>
        {success && (
          <SimpleAlertDialog
            title="Изменения сохранены"
            onClose={this.closeFormThenSuccess}
            open={success !== null}
          />
        )}
        {error && (
            <SimpleAlertDialog
              title="Произошла ошибка"
              content={error}
              onClose={this.closeErrorDialog}
              open={error !== null}
            />
        )}
        <Formik
          initialValues={initialValues || INITIAL_VALUE}
          validationSchema={VALIDATION_SCHEME}
          onSubmit={this.save}
          render={() => (
            <Form className={classes.container}>
              <Grid container spaicing={1} justify={"space-around"}>
                <Grid item xs={6}>
                  <FormGroup>
                    <FormControl className={classes.margin}>
                      <AutocompleteSelectField
                        name="personDto"
                        options={
                          readOnly ? [initialValues.personDto] : persons
                        }
                        displayLabel="Автор"
                        label="surname"
                        placeholder="Выберите из списка"
                      />
                    </FormControl>
                    <FormControl className={classes.margin}>
                      <AutocompleteSelectField
                        name="publicationDto"
                        options={
                          readOnly ? [initialValues.publicationDto] : publications
                        }
                        displayLabel="Публикация"
                        label="content"
                        placeholder="Выберите из списка"
                      />
                    </FormControl>
                  </FormGroup>
                </Grid>
                {!readOnly && (
                  <Grid container justify="center">
                    <Grid item xs={3}>
                      <Divider variant="middle"/>
                      <Button
                        fullWidth
                        className={classes.button}
                        type="submit"
                        variant="text"
                        size="small"
                      >
                        Сохранить
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Form>
          )}
        />
      </>
    );
  }
}

export default withStyles(styles)(withRouter(AuthorChangesForm));