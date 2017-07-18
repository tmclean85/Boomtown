import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const names = [
  'Electronics',
  'Household Items',
  'Musical Instruments',
  'Physical Media',
  'Recreational Media',
  'Sporting Goods',
  'Tools',
];
export default class FilterList extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({ values });

  menuFilter(values) {
    return names.map((name) => (
        <MenuItem
            key={name}
            insetChildren={true}
            checked={values && values.indexOf(name) > -1}
            value={name}
            primaryText={name}
        />
    ));
  }

  render() {
    const { values } = this.state;
    return (
        <SelectField
            multiple={true}
            hintText='Filter by Tag'
            value={values}
            onChange={this.handleChange}
        >
            {this.menuFilter(values)}
        </SelectField>
    );
  }
}
