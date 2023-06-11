import styled from "styled-components";
const StyledHero = styled.section`
  background: url("/src/images/hero.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
`;

const H2 = styled.h2`
  color: #b8b4b4;
  text-transform: uppercase;
  font-size: 2rem;
  margin-left: 10rem;
  padding-top: 15rem;
  font-weight: 500;
`;
const P = styled.p`
  color: whitesmoke;
  font-size: 6.4rem;
  margin-left: 10rem;
  margin-top: 5rem;
  font-weight: 700;
  max-width: 90rem;
`;
const Button = styled.button`
  background-color: initial;
  border: 3px solid whitesmoke;
  border-radius: 0;
  color: whitesmoke;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin-left: 80rem;
  margin-top: 5rem;
`;

function Hero() {
  return (
    <StyledHero>
      <H2>Portfolio</H2>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eius
        hic velit excepturi amet praesentium!
      </P>
      <Button> MORE ABOUT MY</Button>
    </StyledHero>
  );
}

export default Hero;
