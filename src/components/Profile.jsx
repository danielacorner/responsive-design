import React from 'react';
import styled from 'styled-components';

const Avatar = ({ src }) => (
  <div className="avatar">
    <img src={src} alt="" srcset="" />
  </div>
);

const DetailsStyles = styled.div``;

const Details = ({
  username,
  title,
  posts,
  followers,
  following,
  description,
  website,
}) => (
  <DetailsStyles>
    {/* TODO: style based on https://www.instagram.com/engineeringcnc/ */}
    {username}
    {title}
    {posts.length}
    {followers}
    {following}
    {description}
    {website}
  </DetailsStyles>
);

const ProfileStyles = styled.div``;

export default function Profile({ userData }) {
  return (
    <ProfileStyles>
      <Avatar src={userData.profilePhoto} />
      <Details {...userData} />
    </ProfileStyles>
  );
}
