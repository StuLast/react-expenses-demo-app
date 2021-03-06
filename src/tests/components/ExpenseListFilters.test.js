import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';


let setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  setSortByDate = jest.fn();
  setSortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={ filters }
      setTextFilter = {setTextFilter}
      setSortByDate = {setSortByDate}
      setSortByAmount = {setSortByAmount}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
    />
  );
});


describe('ExpenseListFilters renders correctly:', () => {
  it('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot()
  })
});

describe('ExpenseListFilters UI calls functions correctly', () => {
  const value = "Coffee"
  it('should handle setTextFilter', () => {
    wrapper.find('input').simulate('change', {
        target: {
          value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
  })

  it('should handle sortByDate', () => {
    const value = 'date'
    wrapper.setProps({filters: altFilters});
    wrapper.find('select').simulate('change', {target: { value }});
    expect(setSortByDate).toHaveBeenCalled();
  })

  it('should handle sortByAmount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {target: { value }});
    expect(setSortByAmount).toHaveBeenCalled();
  })

  it('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(4, 'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  })

  it('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  })
})