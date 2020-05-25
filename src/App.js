import React from "react";
import "./App.css";
import Datapicker from "./Datepicker";
import Timepicker from "./Timepicker";
import {
  createScheduleDate,
  setReservedTimesFromApi,
} from "./store/actions/schedule";

import { connect } from "react-redux";
import moment from "moment";
import axios from "axios";

export const dateFormatTemplate = "YYYY-MM-DD";

class App extends React.Component {
  componentDidMount() {
    axios
      .get("https://codete-react.firebaseio.com/schedule.json")
      .then((response) => {
        this.props.setReservedTimesFromApi(response.data.schedule);
      });
  }

  chooseTime = (time) => {
    const {
      reservedTimes,
      selectedDate,
      times,
      setReservedTimesFromApi,
    } = this.props;

    const newTimes = { ...times, [selectedDate]: [...reservedTimes, time] };

    axios
      .put("https://codete-react.firebaseio.com/schedule.json", {
        schedule: newTimes,
      })
      .then((response) => {
        setReservedTimesFromApi(response.data.schedule);
        console.warn(response);
      })
      .catch((e) => console.log(e));
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
    setReservedTimesFromApi: (times) =>
      dispatch(setReservedTimesFromApi(times)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
