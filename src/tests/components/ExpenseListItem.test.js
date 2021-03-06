import React from 'react';
import { shallow } from "enzyme";

import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

describe('Render ExpenseListItem', () => {
  it('should render an ExpenseListItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});