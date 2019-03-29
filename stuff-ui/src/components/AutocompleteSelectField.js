import React from "react";
import * as PropTypes from "prop-types";
import { Field } from "formik";
import Select from "react-select";
import NoSsr from "@material-ui/core/NoSsr/NoSsr";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import { isEqual } from "lodash";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 16
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

const inputComponent = ({ inputRef, ...props }) => (
  <div ref={inputRef} {...props} />
);

const NoOptionsMessage = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.noOptionsMessage}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const Control = props => (
  <TextField
    fullWidth
    InputProps={{
      inputComponent,
      inputProps: {
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children,
        ...props.innerProps
      }
    }}
    {...props.selectProps.textFieldProps}
  />
);

const Menu = props => (
  <Paper
    square
    className={props.selectProps.classes.paper}
    {...props.innerProps}
  >
    {props.children}
  </Paper>
);

const Option = props => (
  <MenuItem
    buttonRef={props.innerRef}
    selected={props.isFocused}
    component="div"
    style={{
      fontWeight: props.isSelected ? 500 : 400
    }}
    {...props.innerProps}
  >
    {props.children}
  </MenuItem>
);

const Placeholder = props => (
  <Typography
    color="textSecondary"
    className={props.selectProps.classes.placeholder}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const SingleValue = props => (
  <Typography
    className={props.selectProps.classes.singleValue}
    {...props.innerProps}
  >
    {props.children}
  </Typography>
);

const ValueContainer = props => (
  <div className={props.selectProps.classes.valueContainer}>
    {props.children}
  </div>
);

const DEFAULT_LABEL = "Не выбрано";

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

const AutocompleteSelectField = props => {
  const {
    name,
    options: suggestions,
    label,
    onChange,
    classes,
    theme,
    displayLabel,
    value,
    ...other
  } = props;
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };
  const options = suggestions.map(suggestion => ({
    value: suggestion,
    label: !suggestion ? DEFAULT_LABEL : label ? suggestion[label] : suggestion
  }));
  return (
    <Field
      name={name}
      render={({ field, form }) => {
        return (
          <div className={classes.root}>
            <NoSsr>
              <Select
                classes={classes}
                options={options}
                styles={selectStyles}
                components={components}
                textFieldProps={{
                  label: displayLabel,
                  InputLabelProps: {
                    shrink: true
                  }
                }}
                onChange={selected => {
                  form.setFieldValue(name, selected.value);
                  if (onChange) {
                    onChange(selected);
                  }
                }}
                value={
                  options
                    ? value
                      ? options.find(option => isEqual(option.value, value))
                      : options.find(option =>
                          isEqual(option.value, field.value)
                        )
                    : ""
                }
                {...other}
              />
            </NoSsr>
          </div>
        );
      }}
    />
  );
};

AutocompleteSelectField.propTypes = {
  options: PropTypes.array,
  value: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  displayLabel: PropTypes.string,
  placeholder: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(AutocompleteSelectField);
