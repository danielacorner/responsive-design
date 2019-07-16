import React from 'react';
import styled from 'styled-components';

const Avatar = ({ src }) => (
  <div className="avatar">
    <img src={src} alt="" srcset="" />
  </div>
);

const DetailsStyles = styled.div`
  .header {
    display: flex;
  }
  .user-statistics {
    display: flex;
  }
`;

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
    <div className="header">
      <div className="username">{username}</div>
      <button className="btn-follow">Follow</button>
    </div>
    <div className="user-statistics">
      <div className="statistic">{posts.length}</div>
      <div className="statistic">{followers}</div>
      <div className="statistic">{following}</div>
    </div>
    {/* TODO: style based on https://www.instagram.com/engineeringcnc/ */}
    {title}
    {description}
    {website}
  </DetailsStyles>
);

const ProfileStyles = styled.div`
  display: grid;
  grid-auto-flow: column;
  .avatar {
    max-width: 100px;
    max-height: 100px;
    img {
      width: 100%;
      border-radius: 999999px;
    }
  }
`;

export default function Profile({ userData }) {
  return (
    <ProfileStyles>
      <Avatar src={userData.profilePhoto} />
      <Details {...userData} />
    </ProfileStyles>
  );
}
