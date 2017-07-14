import React, { Component } from 'react';
import Items from './Items';
import Loader from '../../components/Loader';
import { userAndItemData } from '../../redux/actions';
import { connect } from 'react-redux';

class ItemsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(userAndItemData());
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

export default connect(mapStateToProps)(ItemsContainer);
