import React from 'react';
import styled from 'styled-components';

const ImageGridStyles = styled.div``;

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
