import React from 'react';
import styled from 'styled-components/macro';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${(p) => p.theme.queries.tabletOnly} {
    grid-template-areas:
      'image'
      'heading'
      'abstract';
    grid-template-columns: 1fr;
    gap: 4px;
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;

  @media ${(p) => p.theme.queries.tabletOnly} {
    /* need to shift down 8px, so -2 + 8 = 6 */
    margin-top: 6px;
  }
`;

// const AbstractWrapper = styled.div`
//   grid-area: abstract;
// `;

const Abstract = styled.p`
  grid-area: abstract;
  align-self: start;
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  /* necessary for line clamping */
  overflow: hidden;
`;

export default SecondaryStory;
