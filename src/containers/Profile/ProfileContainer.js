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
      fullName
      bio
      email
      borrowed {
        id
        title
        itemOwner {
          fullName
        }
      }
      items {
        title
        itemOwner {
          id
          fullName
          email
        }
        imageUrl
        borrower {
          fullName
        }
        createdOn
        description
        tags
      }
    }
  }
`;
class ProfileContainer extends Component {

  // componentDidMount() {
  //   this.props.dispatch(fetchItemData(this.props.match.params.id));
  //   this.props.dispatch(getProfileData(this.props.match.params.id));
  // }

  render() {
    if (this.props.data.loading) return <Loader />;
    return (
      <div className="single-profile">
          <Profile usersData={this.props.data.users} itemsData={this.props.data.items} />
            <Masonry
                className={'itemCardListWrapper'}
                elementType={'ul'}
            >
                <ItemCardList itemsData={this.props.data.items} />
            </Masonry>
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.profiles.loading,
    usersData: state.profiles.usersData,
    itemsData: state.items.itemsData,
  };
}

const userListWithData = graphql(fetchUsers)(ProfileContainer);
export default connect(mapStateToProps)(userListWithData);
