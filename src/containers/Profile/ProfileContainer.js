import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ItemCardList from '../../components/ItemCardList';
import Profile from './Profile';
import Loader from '../../components/Loader';


const fetchUsers = gql`
  query fetchUsers($id: ID!) {
    user(id: $id) {
      id
      fullname
      bio
      email
      items {
        title
        itemOwner {
          id
          fullname
          email
        }
        imageUrl
        borrower {
          id
        }
        createdOn
        description
        tags
      }
        borrowed {
        id
        title
        itemOwner {
          fullname
        }
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
            <Masonry
                className={'itemCardListWrapper'}
                elementType={'ul'}
            >
                <ItemCardList itemsData={this.props.data.user.items} />
            </Masonry>
        </div>
    );
  }
}

ProfileContainer.propTypes = {
  data: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    borrowed: PropTypes.shape({
      title: PropTypes.string.isRequired,
      itemOwner: PropTypes.shape({
        fullname: PropTypes.string.isRequired,
      }).isRequired,
    }),
    items: PropTypes.shape({
      title: PropTypes.shape({
        itemOwner: PropTypes.shape({
          id: PropTypes.string.isRequired,
          fullname: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
        }).isRequired,
        imageUrl: PropTypes.string.isRequired,
        borrower: PropTypes.shape({
          fullname: PropTypes.string.isRequired,
        }),
        createdOn: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
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
