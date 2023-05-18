import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendsListItem';
import { FriendStyle }  from './Friends.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendStyle.FriendList>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendStyle.FriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;