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
    surnames,
    firstNames,
    positions,
    academicTitles
  } = props;
  return (
    <Formik
      initialValues={initial}
      onSubmit={onSubmit}
      render={() => (
        <Form>
          <FormGroup>
            <InputField name="caption" label="Имя содержит"/>
            <InputField name="caption" label="Фамилия содержит"/>
            <InputField name="caption" label="Титул"/>
            {/* <Typography variant="caption"></Typography>*/}
            {/*   <Grid container justify="space-between">
              <Grid item>
                <InputField name="numberGreater" label="Больше" />
              </Grid>
              <Grid item>
                <InputField name="numberLess" label="Меньше" />
              </Grid>
            </Grid>*/}
            {/*   <AutocompleteSelectField
              name="academicTitles"
              displayLabel="Титул"
              options={academicTitles}
              placeholder=""
            />*/}
            {/*  <Typography style={{ marginTop: 10 }} variant="caption">
              Дата приобретения
            </Typography>*/}
            {/*   <Grid container justify="space-between">
              <Grid item>
                <InputField
                  name="dateLater"
                  label="Позже"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item>
                <InputField
                  name="dateEarlier"
                  label="Раньше"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>*/}
            {/* <Typography variant="caption">Стоимость</Typography>
            <Grid container justify="space-between">
              <Grid item>
                <InputField name="costGreater" label="Дороже" />
              </Grid>
              <Grid item>
                <InputField name="costLess" label="Дешевле" />
              </Grid>
            </Grid>*/}
          {/*  <AutocompleteSelectField
              name="position"
              label="name"
              displayLabel="Должность"
              options={positions}
              placeholder=""
            />*/}
            {/* <AutocompleteSelectField
              name="building"
              label="address"
              options={buildings}
              displayLabel="Адрес здания"
              placeholder=""
            />
            <AutocompleteSelectField
              name="state"
              displayLabel="Состояние"
              options={states}
              placeholder=""
            />*/}
            {/*    <AutocompleteSelectField
              name="officer"
              label="name"
              displayLabel="Работник хоз.части"
              options={officers}
              placeholder=""
            />
            <AutocompleteSelectField
              name="accountant"
              label="name"
              displayLabel="Принимающий бухгалтер"
              options={accountants}
              placeholder=""
            />*/}
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
  /*  surnames,
    firstNames,*/
  positionD: PropTypes.array
  // academicTitles
};

export default withStyles(styles)(PersonFilterForm);
