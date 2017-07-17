import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import ItemCardList from '../../components/ItemCardList';
import Profile from './Profile';
import { fetchItemData } from '../../redux/modules/items';
import { getProfileData } from '../../redux/modules/profile';
import Loader from '../../components/Loader';

class ProfileContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchItemData(this.props.match.params.id));
    this.props.dispatch(getProfileData(this.props.match.params.id));
  }

  render() {
    if (this.props.loading) return <Loader />;
    return (
      <div className="single-profile">
          <Profile usersData={this.props.usersData} itemsData={this.props.itemsData} />
            <Masonry
    className={'itemCardListWrapper'}
    elementType={'ul'}
  >
          <ItemCardList itemsData={this.props.thisUsersItems} />
          </Masonry>
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  usersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  thisUsersItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.profiles.loading,
    usersData: state.profiles.usersData,
    itemsData: state.items.itemsData,
    thisUsersItems: state.items.thisUsersItems
  };
}

export default connect(mapStateToProps)(ProfileContainer);
