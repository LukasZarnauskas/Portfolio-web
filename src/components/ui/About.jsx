/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
const StyledAbout = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0;
  background-color: #39b54a;
  height: 100vh;
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
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const H3 = styled.h3`
  font-size: 3.5rem;
`;
const Ul = styled.ul`
  list-style: none;
  color: whitesmoke;
`;
const Li = styled.li`
  display: flex;
`;
const LiEd = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 2rem;
`;
const H4 = styled.h4``;
const PEd = styled.p``;
const Year = styled.p``;
function About() {
  return (
    <StyledAbout>
      <AboutH2>ABOUT MY</AboutH2>

      <P>
        I have gained experience in the field of health care by working as
        physiotherapist. The time has come when I decided to change mine
        profession. I decided to pursue a front-end programmer career. That's
        why I'm currently looking for a job where I can develop as a frontend
        developer.
      </P>
      <Div>
        <H3>My skills</H3>
        <Ul>
          <Li>
            <Img src="/src/images/html.png" alt="html" /> HTML
          </Li>
          <Li>
            <Img src="/src/images/css-3.png" alt="html" />
            CSS
          </Li>
          <Li>
            <Img src="/src/images/java-script.png" alt="html" />
            JavaScript
          </Li>
          <Li>
            <Img src="/src/images/atom.png" alt="html" />
            React
          </Li>
        </Ul>
        <H3>Education</H3>
        <Ul>
          <LiEd>
            <H4>Physiotherapy Bachelor</H4>
            <PEd>Lithuania Sport University</PEd>
            <Year>2016 - 2020</Year>
          </LiEd>
          <LiEd>
            <H4>Massager qualification</H4>
            <PEd>Karalius Mindaugas Vocational training centre</PEd>
            <Year>2020</Year>
          </LiEd>
          <LiEd>
            <H4>Frontend developer</H4>
            <PEd>CodeAcademy</PEd>
            <Year>560 hours</Year>
          </LiEd>
        </Ul>
      </Div>
      <Button> MORE ABOUT MY</Button>
    </StyledAbout>
  );
}

export default About;
