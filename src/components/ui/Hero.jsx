/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
const StyledHero = styled.section`
  display: flex;
  background: url("/src/images/hero.jpg") no-repeat;
  background-size: cover;
  padding: 10rem 0;
  height: 100vh;
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  padding-top: 10rem;
  margin-left: 20rem;
`;
const H1 = styled.h1`
  color: #39b54a;
  font-size: 6rem;
`;

const H2 = styled.h2`
  color: whitesmoke;
  font-size: 2.5rem;
  margin-top: 5rem;
`;

const P = styled.p`
  color: whitesmoke;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 5rem;
`;
const Button = styled.button`
  background-color: initial;
  border: 3px solid whitesmoke;
  border-radius: 0;
  color: whitesmoke;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin-top: 5rem;
  align-self: flex-end;
  transition: 0.5s;
  &:hover {
    background: #f5f5f524;
    transition: 0.5s;
  }
`;
const Img = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 50%;
  margin-right: 20rem;
  margin-left: 5rem;
  filter: grayscale(80%);
`;

const Span = styled.span`
  color: #39b54a;
  text-decoration: underline;
`;

function Hero() {
  return (
    <StyledHero>
      <Paragraph>
        <H1>Hi, I'am Lukas</H1>
        <H2>Frontend Developer</H2>
        <P>
          I'm new Frontend Developer based in Kaunas, Lithuania. I looking for a
          challanges and opportunities to grow as a developer. If you looking
          for a Frontend Developer, <Span>let's work together.</Span>
        </P>
        <Button> CONTACT</Button>
      </Paragraph>
      <Img src="./src/images/1667566343397.jpg" alt="Lukas" />
    </StyledHero>
  );
}

export default Hero;
