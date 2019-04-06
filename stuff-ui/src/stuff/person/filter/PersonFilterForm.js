import React from "react";
import {Form, Formik} from "formik";
import FormGroup from "@material-ui/core/es/FormGroup/FormGroup";
import * as PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider/Divider";
import Button from "@material-ui/core/Button/Button";
import {withStyles} from "@material-ui/core";
import AutocompleteSelectField from "../../../components/AutocompleteSelectField";
import InputField from "../../../components/InputField";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 4
  }
});

const PersonFilterForm = props => {
  const {
    onSubmit,
    classes,
    initial,
    positionDtos,
  } = props;
  return (
    <Formik
      initialValues={initial}
      onSubmit={onSubmit}
      render={() => (
        <Form>
          <FormGroup>
            <InputField name="firstName" label="Имя содержит"/>
            <InputField name="surname" label="Фамилия содержит"/>
            <InputField name="academicTitle" label="Титул содержит"/>
            <InputField name="biography" label="Биография содержит"/>
            <InputField name="interests" label="Интересы содержат"/>
               <AutocompleteSelectField
              name="positionDto"
              label="name"
              displayLabel="Должность"
              options={positionDtos}
              placeholder=""
            />
            <Divider/>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Применить фильтры
            </Button>
          </FormGroup>
        </Form>
      )}
    />
  );
};

PersonFilterForm.propTypes = {
  onSubmit: PropTypes.func,
  positions: PropTypes.array
};

export default withStyles(styles)(PersonFilterForm);
