import React from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";

const styles = theme => ({
  textFieldRoot: {
    padding: 0,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  textFieldFormLabel: {
    fontSize: 18
  }
});
class FilterFishTextField extends React.Component {

  onChangeHandler = (event) => {
    this.props.onRequestFilter(event.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <TextField
        label="Filter"
        placeholder="Eg: salmon"
        onChange={this.onChangeHandler}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput
          }
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel
        }}
      />
    );
  }
}

export default withStyles(styles)(FilterFishTextField);
