import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledNew,
  StyledHeadband,
  StyledCaption,
  StyledTitle,
  StyledDescription,
  StyledAuthor,
} from './style';

import Photo from '../../../assets/images/full-photo.jpg';

const New = ({
  type,
  title,
  description,
  headband,
  image,
  imageCaption,
  author,
}) => {
  console.log('imagen: ', Photo);
  return (
    <StyledNew type={type}>
      {headband && <StyledHeadband>{headband}</StyledHeadband>}
      {image && (
        <figure className="new-figure">
          <img className="new-image" src={image} alt="#" />
          {imageCaption && (
            <StyledCaption className="new-image-description">
              {imageCaption}
            </StyledCaption>
          )}
        </figure>
      )}
      <StyledTitle>{title}</StyledTitle>
      {description && <StyledDescription>{description}</StyledDescription>}
      {author && <StyledAuthor>{author}</StyledAuthor>}
    </StyledNew>
  );
};

New.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf(['full', 'vertical', 'horizontal', 'small']),
  headband: PropTypes.string,
  image: PropTypes.string,
  imageCaption: PropTypes.string,
  author: PropTypes.string,
};

New.defaultProps = {
  type: 'vertical',
  description: undefined,
  headband: undefined,
  image: undefined,
  imageCaption: undefined,
  author: undefined,
};

export default New;
