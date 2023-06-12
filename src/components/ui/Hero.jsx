import styled from "styled-components";
const StyledHero = styled.section`
  background: url("/src/images/hero.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 90rem;
  padding-top: 10rem;
  margin-left: 20rem;
`;
const H2 = styled.h2`
  color: #b8b4b4;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
`;
const P = styled.p`
  color: whitesmoke;
  font-size: 6.4rem;
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

function Hero() {
  return (
    <StyledHero>
      <Paragraph>
        <H2>Portfolio</H2>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eius
          hic velit excepturi amet praesentium!
        </P>
        <Button> MORE ABOUT MY</Button>
      </Paragraph>
    </StyledHero>
  );
}

export default Hero;
