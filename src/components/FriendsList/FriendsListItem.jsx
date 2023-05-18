import React from 'react';
import PropTypes from 'prop-types';
import { FriendStyle }  from './Friends.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
 

  return (
    <FriendStyle.FriendItem>
      <FriendStyle.Status status={isOnline}></FriendStyle.Status>
      <img  src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendStyle.FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;