import styled from "styled-components";
const StyledAbout = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0;
  background-color: #39b54a;
`;
const AboutH2 = styled.h2`
  font-size: 5rem;
`;
const P = styled.p`
  font-size: 2rem;
  margin-top: 5rem;
  color: whitesmoke;
  text-align: center;
  padding: 0 25rem;
`;
const Button = styled.button`
  background-color: initial;
  border: 3px solid whitesmoke;
  border-radius: 0;
  color: whitesmoke;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin-top: 5rem;
  transition: 0.5s;
  &:hover {
    background: #f5f5f524;
    transition: 0.5s;
  }
`;
function About() {
  return (
    <StyledAbout>
      <AboutH2>ABOUT MY</AboutH2>
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa
        cumque in nobis ut vel, mollitia voluptatibus necessitatibus corrupti
        dolorum nulla aut consectetur cum aperiam quod accusantium, voluptates
        tempore amet.
      </P>
      <Button> MORE ABOUT MY</Button>
    </StyledAbout>
  );
}

export default About;
