import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';
import { COLORS } from '../../constants';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>

      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>subscribe</Button>
          <SubscribeLink href='/'>
            Already a subscriber?
          </SubscribeLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${(p) => p.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${(p) => p.theme.queries.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
    margin-top: 16px;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${(p) => p.theme.queries.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media ${(p) => p.theme.queries.laptopAndUp} {
    position: relative;
    display: revert;
    justify-self: end;
  }
`;

const SubscribeLink = styled.a`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
  text-decoration: underline;
  color: ${COLORS.gray[900]};
  font-size: ${14 / 16}rem;
`;

export default Header;
