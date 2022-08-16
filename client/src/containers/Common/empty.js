import styled from "styled-components";
import { ReactComponent as EmptySVG } from '../../images/empty.svg';

const EmptyBlock = styled.div`
  @media (min-width: 960px) {
    padding-top: 8rem;
    padding-bottom: 16.5rem;
  }

  padding-top: 6.4rem;
  padding-bottom: 6.4rem;
  text-align: center;

  .empty-item {
    height: 13.2rem;

    #empty-item__clip-{
    }
    .empty-item__clip-01 {
      animation: falling-01 2s ease-in-out forwards;
    }
    .empty-item__clip-02 {
      transform-origin: bottom right;
      animation: falling-02 2s ease-in-out forwards;
    }
    .empty-item__clip-03 {
      transform-origin: right bottom;
      animation: falling-03 2s ease-in-out forwards;
    }

    @keyframes falling-01 {
      0% {
        transform: translate3d(0, -1.8rem, 0) rotate(-12deg);
      }
      100% {
        transform: translate3d(0.5rem, 0, 0) rotate(0);
      }
    }

    @keyframes falling-02 {
      0% {
        transform: translate3d(-2.4rem, 0, 0) rotate(30deg);
      }
      100% {
        transform: translate3d(0, 0, 0) rotate(0);
      }
    }

    @keyframes falling-03 {
      0% {
        transform: translate3d(-1.2rem, 0, 0) rotate(-18deg);
      }
      100% {
        transform: translate3d(0, 0, 0) rotate(0);
      }
    }
  }
`;

const EmptyText = styled.p`
  margin-top: 3rem;
  color: #9b9ba0;
`;

function Empty({ text, children }) {
  return (
    <EmptyBlock>
      <EmptySVG />
      <EmptyText>{text}</EmptyText>
    </EmptyBlock>
  )
}

export default Empty