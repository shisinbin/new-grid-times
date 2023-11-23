import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    grid-template-columns: minmax(0px, auto);
    gap: 64px;
  }
  @media ${(p) => p.theme.queries.laptopAndUp} {
    grid-template-columns: 1fr minmax(0px, 1fr);
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${(p) => p.theme.queries.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
    margin-right: 16px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    overflow: auto;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: var(--color-gray-300);
      -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
  }
`;

const SportsStoryWrapper = styled.div`
  @media ${(p) => p.theme.queries.tabletAndUp} {
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
