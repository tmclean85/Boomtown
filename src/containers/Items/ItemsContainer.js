import React, { Component } from 'react';
import Items from './Items';
import Loader from '../../components/Loader';
import { fetchItemData } from '../../redux/modules/items';
import { connect } from 'react-redux';

class ItemsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchItemData());
  }

  render() {
    if (this.props.loading) return <Loader />;
    return <Items itemsData={this.props.itemsData} />;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.items.loading,
    itemsData: state.items.itemsData
  };
}

// TODO: Prop-type validation

export default connect(mapStateToProps)(ItemsContainer);
