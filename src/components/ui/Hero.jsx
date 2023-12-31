/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
const StyledHero = styled.section`
  display: flex;
  background: url("/images/hero.jpg") no-repeat;
  background-size: cover;
  padding: 15rem 20rem;
  min-height: 100vh;
  @media only screen and (max-width: 1024px) {
    padding: 15rem 10rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 5rem;
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
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
const Button = styled.a`
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

  margin-left: 5rem;
  filter: grayscale(80%);
  @media only screen and (max-width: 1024px) {
    width: 30rem;
    height: 30rem;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Span = styled.span`
  color: #39b54a;
  text-decoration: underline;
`;

function Hero() {
  return (
    <StyledHero id="hero">
      <Paragraph>
        <H1>Hi, I'm Lukas</H1>
        <H2>Frontend Developer</H2>
        <P>
          I'm a new frontend developer based in Kaunas, Lithuania. I am looking
          for a challenges and opportunities to grow as a developer. If you are
          looking for a frontend developer, <Span>let's work together.</Span>
        </P>
        <Button href="#contact"> CONTACTS</Button>
      </Paragraph>
      <Img src="/images/1667566343397.jpg" alt="Lukas" />
    </StyledHero>
  );
}

export default Hero;
