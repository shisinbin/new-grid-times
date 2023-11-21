import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <VerticalStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </VerticalStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    gap: 48px 0;
  }

  @media ${(p) => p.theme.queries.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${(p) => p.theme.queries.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${(p) => p.theme.queries.tabletAndUp} {
    flex-direction: revert;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }

  @media ${(p) => p.theme.queries.laptopAndUp} {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const VerticalStoryWrapper = styled.div`
  --spacing: 16px;

  &:not(:last-of-type) {
    padding-bottom: var(--spacing);
    border-bottom: 1px solid var(--color-gray-300);
    margin-bottom: var(--spacing);

    @media ${(p) => p.theme.queries.tabletOnly} {
      ${OpinionStoryList} > & {
        padding-bottom: revert;
        border-bottom: revert;
        margin-bottom: revert;
      }
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${(p) => p.theme.queries.laptopAndUp} {
    margin-top: -8px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${(p) => p.theme.queries.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
