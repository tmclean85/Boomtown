import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Items from './Items';
import Loader from '../../components/Loader';


const fetchItems = gql`
  query fetchItems {
    items {
      id
      title
      description
      imageUrl
      tags
      itemOwner {
        fullname
      }
      createdOn
      available
      borrower {
        id
      }
    }
  }
`;

class ItemsContainer extends Component {

  newFilteredList(itemFilter) {
    const itemsData = this.props.data.items || [];
    if (itemFilter && itemsData) {
      return itemsData.filter((itemData) => itemData.tags.find(tag => itemFilter.includes(tag)));
    }
    return itemsData;
  }

  render() {
    if (this.props.data.loading) return <Loader />;

    const { itemFilter } = this.props;
    const filteredItems = this.newFilteredList(itemFilter);
    if (filteredItems.length) {
      return <Items itemsData={filteredItems} />;
    } else {
      return <Items itemsData={this.props.data.items} />;
    }
  }
}

function mapStateToProps(state) {
  return {
    itemFilter: state.items.itemFilter,
  };
}

ItemsContainer.propTypes = {
  itemFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      itemOwner: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
      }).isRequired,
      createdOn: PropTypes.number.isRequired,
      available: PropTypes.bool.isRequired,
      borrower: PropTypes.objectOf(PropTypes.string),
    }))
  }).isRequired,
};

const itemListWithData = graphql(fetchItems)(ItemsContainer);
export default connect(mapStateToProps)(itemListWithData);
