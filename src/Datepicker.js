import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";
import { createScheduleDate } from "./store/actions/schedule";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// const classes = useStyles();

class Datapicker extends Component {
  chooseData = (event) => {
    console.log(new Date(event.target.value));
    this.props.createScheduleDate(event.target.value);
  };

  render() {
    console.log("D dates", this.props.dates);
    return (
      <form noValidate>
        <TextField
          id="date"
          label="Choose Date"
          type="date"
          defaultValue="2017-05-24"
          onChange={(event) => this.chooseData(event)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    dates: state.schedule.dates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createScheduleDate: (date) => dispatch(createScheduleDate(date)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Datapicker);
