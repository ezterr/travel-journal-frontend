import React from 'react';
import './UserHeader.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserAvatar } from '../UserAvatar/UserAvatar';

interface Props {
  imageUrl: string;
  firstName: string;
  lastName: string;
  userId: string;
}

export function UserHeader({
  firstName, lastName, imageUrl, userId,
}: Props) {
  const navigate = useNavigate();
  return (
    <div className="UserHeader">
      <UserAvatar
        alt={`${firstName} ${lastName} - avatar`}
        imageUrl={imageUrl}
        onClick={() => navigate(`/profile/${userId}`)}
      />

      <p>{`${firstName} ${lastName}`}</p>
    </div>
  );
}
