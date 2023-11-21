import React from 'react';
import styled from 'styled-components/macro';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt='' src={avatar} />
        <AuthorWrapper>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </AuthorWrapper>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    flex-direction: column;
  }
  @media ${(p) => p.theme.queries.laptopAndUp} {
    flex-direction: row-reverse;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
  margin-left: 16px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    margin-left: revert;
  }
  @media ${(p) => p.theme.queries.laptopAndUp} {
    margin-left: 16px;
  }
`;

const AuthorWrapper = styled.div`
  flex: 1;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
