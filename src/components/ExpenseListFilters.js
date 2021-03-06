import React from "react";
import { connect } from "react-redux";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

import {
  setTextFilter,
  setSortByDate,
  setSortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.setSortByDate();
    } else if ((e.target.value = "amount")) {
      this.props.setSortByAmount();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              className="text-input"
              type="text"
              placeholder="Search:"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId="startDate"
              endDate={this.props.filters.endDate}
              endDateId="endDate"
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              isOutsideRange={() => false}
              numberOfMonths={1}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => {
    dispatch(setStartDate(startDate));
  },
  setEndDate: (endDate) => {
    dispatch(setEndDate(endDate));
  },
  setTextFilter: (text) => {
    dispatch(setTextFilter(text));
  },
  setSortByDate: () => {
    dispatch(setSortByDate());
  },
  setSortByAmount: () => {
    dispatch(setSortByAmount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
