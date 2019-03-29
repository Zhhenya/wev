import React from "react";
import { Field, getIn } from "formik";
import TextField from "@material-ui/core/TextField/TextField";
import * as PropTypes from "prop-types";

const InputField = props => {
  const { name, readOnly, ...other } = props;

  return (
    <Field
      name={name}
      render={({ field, form }) => {
        const errorText = getIn(form.errors, name);
        return (
          <TextField
            margin="normal"
            error={Boolean(errorText)}
            helperText={errorText}
            inputProps={{
              readOnly: Boolean(readOnly)
            }}
            {...field}
            {...other}
          />
        );
      }}
    />
  );
};

InputField.propTypes = {
  ...TextField.propTypes,
  name: PropTypes.string,
  label: PropTypes.string
};

export default InputField;
