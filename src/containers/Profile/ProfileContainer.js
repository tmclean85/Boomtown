import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ItemCardList from '../../components/ItemCardList';
import Profile from './Profile';
import Loader from '../../components/Loader';


const fetchUsers = gql`
   query fetchUsers($id: ID!) {
    user(id: $id) {
      id
      email
      fullname
      bio
      items {
        id
        imageurl
        itemowner{
          email
          fullname
          id
          }
        title
        createdon
        tags {
            title
        }
        description
      }
    borrowed {
      title
    }
    }
  }
`;

class ProfileContainer extends Component {

  render() {
    if (this.props.data.loading) return <Loader />;
    return (
        <div className="single-profile">
            <Profile usersData={this.props.data.user} />
            <ItemCardList itemsData={this.props.data.user.items} />
        </div>
    );
  }
}

ProfileContainer.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    borrowed: PropTypes.shape({
      title: PropTypes.string.isRequired,
      itemowner: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
      }).isRequired,
    }),
    items: PropTypes.shape({
      title: PropTypes.shape({
        itemowner: PropTypes.shape({
          id: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          fullname: PropTypes.string.isRequired,
        }).isRequired,
        imageurl: PropTypes.string.isRequired,
        borrower: PropTypes.shape({
          fullname: PropTypes.string.isRequired,
        }),
        createdon: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        })).isRequired,
      })
    })
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    loading: state.profiles.loading,
    usersData: state.profiles.usersData,
    itemsData: state.items.itemsData,
  };
}
const userListWithData = graphql(fetchUsers, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(ProfileContainer);
// const userListWithData = graphql(fetchUsers)(ProfileContainer);
export default connect(mapStateToProps)(userListWithData);
