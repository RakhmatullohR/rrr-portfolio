import { styled } from 'styled-components';
import img from '../assets/bg-img.png';

export const AppHeader = styled.div`
  position: relative;
  background-image: url(${img});
  background-size: 100%;
  background-repeat: repeat;
  background-position: top;
  height: fit-content;
  .app__wrapper {
    padding: 0;
    .copyright {
      display: none;
    }
  }

  // .app__header
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 6rem 2rem 0;

  @media screen and (min-width: 2000px) {
    padding-top: 8rem;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    padding: 6rem 1rem 2rem;
  }

  .app__header-info {
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    @media screen and (max-width: 2000px) {
      width: 100%;
      margin-right: 0rem;
    }
    .app__header-badge {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      .badge-cmp,
      .tag-cmp {
        padding: 1rem 2rem;
        border: var(--white-color);
        border-radius: 15px;
        flex-direction: row;
        width: auto;

        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      }
      .tag-cmp {
        flex-direction: column;
        margin-top: 3rem;
        p {
          width: 100%;
          text-transform: uppercase;
          text-align: right;
        }
      }
      span {
        font-size: 2.5rem;
        @media screen and (min-width: 2000px) {
          font-size: 5rem;
        }
      }
      @media screen and (max-width: 1200px) {
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
  }

  .app__header-circles {
    flex: 0.75;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100%;
    margin-left: 1rem;
    div {
      width: 100px;
      height: 100px;
      border-radius: 50%;

      background-color: var(--white-color);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      img {
        width: 60%;
        height: 60%;
      }
    }
    div:nth-child(1) {
      width: 100px;
      height: 100px;
    }
    div:nth-child(2) {
      margin: 1.75rem;
      width: 150px;
      height: 150px;
    }
    div:nth-child(3) {
      width: 70px;
      height: 70px;
    }
    @media screen and (min-width: 2000px) {
      div:nth-child(1) {
        width: 400px;
        height: 400px;
      }
      div:nth-child(2) {
        width: 170px;
        height: 170px;
      }
      div:nth-child(3) {
        width: 200px;
        height: 200px;
      }
    }
    @media screen and (max-width: 1200px) {
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 0;
      div {
        margin: 1rem;
      }
    }
  }
  .app__header-img {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;

    img {
      width: 100%;
      object-fit: contain;
      z-index: 1;
    }
    .overlay_circle {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      height: 90%;
    }
    @media screen and (max-width: 1200px) {
      margin: 2rem 0;
    }
  }
`;

export const AppWorkWrapper = styled.div`
  flex: 1;
  width: 100%;
  flex-direction: column;
  background: #fd6969ac;
  padding: 6rem 0 6rem;

  .app__work-filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin: 4rem 0 2rem;

    .app__work-filter-item {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: #fff;
      color: #000;
      font-weight: 800;

      cursor: pointer;
      transition: all 0.3s ease;
      margin: 0.5rem;

      &:hover {
        background-color: var(--secondary-color);
        color: #fff;
      }

      @media screen and (min-width: 2000px) {
        padding: 1rem 2rem;
        border-radius: 0.85rem;
      }
    }

    .item-active {
      background-color: var(--secondary-color);
      color: #fff;
    }
  }

  .app__work-portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .app__work-item {
      width: 300px;
      flex-direction: column;

      margin: 1rem 0.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #fff;
      color: #000;

      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
      }

      @media screen and (min-width: 2000px) {
        width: 470px;
        padding: 0.7rem;
        border-radius: 0.75rem;
      }

      @media screen and (max-width: 300px) {
        width: 100%;
        margin: 1rem;
      }
    }
  }

  .app__work-img {
    width: 100%;
    aspect-ratio: 1920/1080;

    position: relative;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }

  .app__work-hover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.3s ease;

    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;

      margin: 1rem;
      font-family: var(--font-base);
      font-weight: 800;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        width: 50%;
        height: 50%;
        color: var(--white-color);
      }
    }
  }

  .app__work-content {
    padding: 0.5rem;
    width: 100%;
    position: relative;
    flex-direction: column;

    h4 {
      margin-top: 0.5rem;
      line-height: 1.5;

      @media screen and (min-width: 2000px) {
        margin-top: 2rem;
      }
    }

    .app__work-tag {
      position: absolute;

      padding: 0.5rem 1rem;
      border-radius: 10px;
      background-color: #fff;
      top: -25px;
    }
  }
`;

export const AppSkills = styled.div`
  padding: 6rem 0 6rem;
  background-color: #ffffff;
  .app__skills-container {
    width: 100%;
    margin-top: 3rem;

    display: flex;
    flex-direction: row;

    @media screen and (max-width: 900px) {
      width: 100%;
      flex-direction: column;
    }
  }

  .app__skills-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
      margin-right: 0;
      justify-content: center;
      align-items: center;
    }
  }

  .app__skills-item {
    flex-direction: column;
    text-align: center;

    margin: 1rem;

    transition: all 0.3s ease-in-out;

    div {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: #fef4f5;

      img {
        width: 50%;
        height: 50%;
      }

      &:hover {
        box-shadow: 0 0 25px #fef4f5;
      }

      @media screen and (min-width: 2000px) {
        width: 150px;
        height: 150px;
      }

      @media screen and (max-width: 450px) {
        width: 70px;
        height: 70px;
      }
    }

    p {
      font-weight: 500;
      margin-top: 0.5rem;
    }

    @media screen and (min-width: 2000px) {
      margin: 1rem 2rem;

      p {
        margin-top: 1rem;
      }
    }
  }

  .app__skills-exp {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 900px) {
      margin-top: 2rem;
    }
  }

  .app__skills-exp-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
  }

  .app__skills-exp-works {
    flex: 1;

    .app__skills-exp-work {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 1rem;
      cursor: pointer;

      h4 {
        font-weight: 500;
      }

      p {
        font-weight: 400;
        color: var(--gray-color);
        margin-top: 5px;
      }
    }
  }

  .app__skills-exp-year {
    margin-right: 3rem;

    p {
      font-weight: 800;
      color: var(--secondary-color);
    }

    @media screen and (max-width: 450px) {
      margin-right: 1rem;
    }
  }

  .skills-tooltip {
    max-width: 300px !important;
    background-color: var(--white-color) !important;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
    border-radius: 5px !important;
    padding: 1rem !important;
    color: var(--gray-color) !important;
    text-align: center !important;
    line-height: 1.5 !important;
    opacity: 1 !important;

    @media screen and (min-width: 2000px) {
      font-size: 1.75rem !important;
      max-width: 500px !important;
      line-height: 2 !important;
    }
  }
`;

export const AppFooter = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5rem 0 0;
  background: black;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .hero {
    text-align: center;
  }
  .head-text {
    color: #ffffff !important;
  }
  .description {
    color: white;
    padding: 0 1rem;
  }
  .social_link_wrapper {
    flex-wrap: wrap;
    gap: 30px;
    margin: 0 1rem;
  }
  .social_link {
    display: flex;
    text-decoration: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    background-color: #23ce6b;
    border-radius: 1rem;
    padding: 1rem 0.8rem;
    transition: background-color 0.25s ease 0s;
    font-size: 1.2rem;
    min-width: 320px;
    max-width: 350px;
    color: black;
    svg {
      min-width: 30px;
      min-height: 30px;
    }
  }
  .footer_text {
    color: white;
    margin: 3rem 0;
    text-align: center;
  }
`;
