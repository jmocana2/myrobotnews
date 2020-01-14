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

const New = ({ type, dataNew }) => {
  console.log('imagen: ', Photo);
  return (
    <StyledNew type={type}>
      {dataNew.headband && <StyledHeadband>{dataNew.headband}</StyledHeadband>}
      {dataNew.image && (
        <figure className="new-figure">
          <img className="new-image" src={dataNew.image} alt="#" />
          {dataNew.imageCaption && (
            <StyledCaption className="new-image-description">
              {dataNew.imageCaption}
            </StyledCaption>
          )}
        </figure>
      )}
      <StyledTitle>{dataNew.title}</StyledTitle>
      {dataNew.description && (
        <StyledDescription>{dataNew.description}</StyledDescription>
      )}
      {dataNew.author && <StyledAuthor>{dataNew.author}</StyledAuthor>}
    </StyledNew>
  );
};

New.propTypes = {
  type: PropTypes.oneOf(['full', 'vertical', 'horizontal', 'small']),
  dataNew: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    headband: PropTypes.string,
    image: PropTypes.string,
    imageCaption: PropTypes.string,
    author: PropTypes.string,
  }),
};

New.defaultProps = {
  type: 'vertical',
  dataNew: {},
};

export default New;
