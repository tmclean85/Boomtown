import React, { Component } from 'react';
import Items from './Items';
import Loader from '../../components/Loader';
import { fetchItemData } from '../../redux/modules/items';
import { connect } from 'react-redux';

class ItemsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchItemData());
  }

  newFilteredList(itemFilter) {
    const { itemsData } = this.props;
    if (itemFilter) {
      return itemsData.filter((itemData) => itemData.tags.find(tag => itemFilter.includes(tag)));
    }
    return itemsData;
  }

  render() {
    const { itemFilter } = this.props;
    const filteredItems = this.newFilteredList(itemFilter);
    if (this.props.loading) return <Loader />;
    return <Items itemsData={filteredItems} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.items.loading,
    itemsData: state.items.itemsData,
    itemFilter: state.items.itemFilter
  };
}

export default connect(mapStateToProps)(ItemsContainer);
