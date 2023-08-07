import { styled } from 'styled-components';

export const GlobalStyleWrapper = styled.div`
  .app {
    background-color: var(--primary-color);
    font-family: var(--font-base);
  }

  .app__whitebg {
    /* background-color: var(--white-color); */
  }

  .app__primarybg {
    /* background-color: var(--primary-color); */
  }

  .app__container {
    width: 100%;
    padding: 3rem 0;

    display: flex;
    flex-direction: row;
  }

  .app__flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .app__wrapper {
    flex: 1;
    width: 100%;
    flex-direction: column;
    padding: 1rem 2rem;

    @media screen and (max-width: 450px) {
      padding: 4rem 1rem 2rem;
    }
  }

  .copyright {
    width: 100%;
    padding: 2rem 0 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    p {
      text-transform: uppercase;
      color: var(--black-color);
    }
  }

  .head-text {
    font-size: 2.75rem;
    font-weight: 800;
    text-align: center;
    color: var(--black-color);
    text-transform: capitalize;

    span {
      color: var(--secondary-color);
    }

    @media screen and (min-width: 2000px) {
      font-size: 4rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 2rem;
    }
  }

  .p-text {
    font-size: 0.8rem;
    text-align: left;
    color: var(--gray-color);
    line-height: 1.5;

    @media screen and (min-width: 2000px) {
      font-size: 1.75rem;
    }
  }

  .bold-text {
    font-size: 1rem;
    font-weight: 800;
    color: var(--black-color);
    text-align: left;

    @media screen and (min-width: 2000px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 450px) {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 500px) {
    .app__navigation,
    .app__social {
      display: none;
    }

    .copyright {
      padding: 2rem;
    }
  }
`;
