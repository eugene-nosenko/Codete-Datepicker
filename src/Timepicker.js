import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";
import { createScheduleTime } from "./store/actions/schedule";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const classes = useStyles();

class Timepicker extends Component {
  chooseTime = (event) => {
    console.log(event.target.value);
    this.props.createScheduleTime(event.target.value);
  };

  render() {
    return (
      <form className={classes.container} noValidate>
        <TextField
          id="time"
          label="Alarm clock"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          onChange={(event) => this.chooseTime(event)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 3000, // 5 min
          }}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    times: state.schedule.times,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createScheduleTime: (time) => dispatch(createScheduleTime(time)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timepicker);
