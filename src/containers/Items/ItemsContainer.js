import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Items from './Items';
import Loader from '../../components/Loader';

class ItemsContainer extends Component {

  newFilteredList(itemsData) {
    const itemFilter = this.props.itemFilter;
    if (itemFilter.length) {
      return itemsData.filter(item => item.tags.map(tag => tag.title).find(
        tag => itemFilter.includes(tag)
      ));
    }
    return itemsData;
  }

  render() {
    const { data: { loading, items } } = this.props;
    if (loading) return <Loader />;
    const filteredItems = this.newFilteredList(items);
    return <Items itemsData={filteredItems} />;
  }
}

ItemsContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      available: PropTypes.bool.isRequired,
      imageurl: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      itemowner: PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
      }).isRequired,
      createdon: PropTypes.string.isRequired,
      borrower: PropTypes.objectOf(PropTypes.string),
    }))
  }).isRequired,
};

const fetchItems = gql`
    query fetchItems {
        items{
            id
            title
            description
            available
            imageurl
            tags{
                id
                title
            }
            itemowner{
                id
                email
                fullname
                bio
            }
        }
        }
`;

function mapStateToProps(state) {
  return {
    itemFilter: state.items.itemFilter
  };
}


const itemListWithData = graphql(fetchItems)(ItemsContainer);
export default connect(mapStateToProps)(itemListWithData);
