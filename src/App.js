import React from "react";
import "./App.css";
import Datapicker from "./Datepicker";
import Timepicker from "./Timepicker";
import {
  createScheduleDate,
  addReservedTime,
  getAllReservedTime,
} from "./store/actions/schedule";

import { connect } from "react-redux";
import moment from "moment";

export const dateFormatTemplate = "YYYY-MM-DD";

class App extends React.Component {
  componentDidMount() {
    this.props.getAllReservedTime();
  }

  chooseTime = (time) => {
    const { reservedTimes, selectedDate, times, addReservedTime } = this.props;

    addReservedTime({ times, time, selectedDate, reservedTimes });
  };

  chooseDate = (date) => {
    const dateString = moment(date).format(dateFormatTemplate);
    this.props.createScheduleDate(dateString);
  };

  render() {
    const { reservedTimes, selectedDate } = this.props;

    return (
      <div className="App">
        <Datapicker chooseDate={this.chooseDate} selectedDate={selectedDate} />
        {selectedDate && (
          <Timepicker
            reservedTimes={reservedTimes}
            chooseTime={this.chooseTime}
            selectedDate={selectedDate}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { times, selectedDate } = state.schedule;

  return {
    times,
    reservedTimes: (selectedDate && times && times[selectedDate]) || [],
    selectedDate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createScheduleDate: (date) => dispatch(createScheduleDate(date)),
    addReservedTime: (data) => dispatch(addReservedTime(data)),
    getAllReservedTime: (id) => dispatch(getAllReservedTime(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
