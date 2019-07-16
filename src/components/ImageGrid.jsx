import React from 'react';
import styled from 'styled-components';

const MEDIA_DESKTOP = 980;

const ImageGridStyles = styled.div`
  margin: auto;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 33vw);
  .image {
    width: 33vw;
  }

  img {
    width: 100%;
  }

  max-width: ${MEDIA_DESKTOP}px;

  @media (min-width: ${MEDIA_DESKTOP}px) {
    grid-template-columns: repeat(3, 33%);
    .image {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }
`;

const ImageGrid = ({ posts }) => (
  <ImageGridStyles>
    {posts.map(({ src }) => (
      <div className="image">
        <img src={src} alt="" srcset="" />
      </div>
    ))}
  </ImageGridStyles>
);

export default ImageGrid;
