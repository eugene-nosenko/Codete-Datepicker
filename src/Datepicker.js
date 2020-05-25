import React from "react";
import { DatePicker } from "@material-ui/pickers";

import moment from "moment";
import { dateFormatTemplate } from "./App";

const Datapicker = (props) => {
  return (
    <DatePicker
      label="Choose Date"
      onChange={(date) => props.chooseDate(date)}
      value={
        props.selectedDate
          ? moment(props.selectedDate, dateFormatTemplate)
          : null
      }
      disablePast={true}
    />
  );
};

export default Datapicker;
