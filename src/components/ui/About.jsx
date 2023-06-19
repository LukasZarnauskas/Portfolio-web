/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10rem 20rem;
  background-color: #39b54a;
  @media only screen and (max-width: 1024px) {
    padding: 10rem 10rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }
`;
const AboutH2 = styled.h2`
  font-size: 5rem;
  text-align: center;
`;
const P = styled.p`
  font-size: 2rem;
  margin-top: 5rem;
  color: whitesmoke;
  text-align: center;
  font-weight: 700;
`;
const Button = styled.a`
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
  margin-top: 5rem;
  border-right: 3px solid whitesmoke;
  padding-right: 5rem;
  @media only screen and (max-width: 768px) {
    border-right: none;
  }
`;
const DivW = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 5rem;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
const DivHist = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const DivWorks = styled.div`
  display: flex;

  gap: 5rem;
  align-items: center;
`;
const H3 = styled.h3`
  font-size: 3.5rem;
  margin-top: 5rem;
`;
const H4 = styled.h4`
  margin-top: 2rem;
`;
const Ul = styled.ul`
  list-style: none;
  color: whitesmoke;
  padding-left: 0;
`;
const Li = styled.li`
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: 700;
`;
const LiEd = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const Img = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
  vertical-align: top;
`;

const PEd = styled.p`
  margin-top: 0.5rem;
`;
const Year = styled.p`
  margin-top: 0.5rem;
`;
function About() {
  return (
    <StyledAbout id="about">
      <AboutH2>ABOUT MY</AboutH2>
      <P>
        I have gained experience in the field of health care by working as
        physiotherapist. The time has come when I decided to change mine
        profession. I decided to pursue a front-end programmer career. That's
        why I'm currently looking for a job where I can develop as a frontend
        developer.
      </P>
      <DivHist>
        <Div>
          <H3>My skills</H3>
          <Ul>
            <Li>
              <Img src="/src/images/html.png" alt="html" />
              HTML
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
            <div>
              <LiEd>
                <H4>Physiotherapy Bachelor</H4>
                <PEd>Lithuania Sport University</PEd>
                <Year>2016 - 2020</Year>
              </LiEd>
            </div>
            <div>
              <LiEd>
                <H4>Massager qualification</H4>
                <PEd>Karalius Mindaugas Vocational training centre</PEd>
                <Year>2020</Year>
              </LiEd>
            </div>
            <div>
              <LiEd>
                <H4>Frontend developer</H4>
                <PEd>CodeAcademy</PEd>
                <Year>560 hours</Year>
              </LiEd>
            </div>
          </Ul>
        </Div>
        <DivW>
          <H3>Work experience</H3>
          <Ul>
            <div>
              <LiEd>
                <H4>Physiotherapist</H4>
                <PEd>VšĮ „Pagrindinis ortopedijos servisas”</PEd>
                <Year>2019-02-11 2019-07-31</Year>
              </LiEd>
            </div>
            <div>
              <LiEd>
                <H4>Physiotherapist</H4>
                <PEd>Šakių 'Vytis' basketball team</PEd>
                <Year>2019/09 - 2021/04</Year>
              </LiEd>
            </div>
            <div>
              <LiEd>
                <H4>Physiotherapist</H4>
                <PEd>Lithuania Beach football national team</PEd>
                <Year>2021/07</Year>
              </LiEd>
            </div>
            <div>
              <LiEd>
                <H4>Physiotherapist</H4>
                <PEd>Utenos 'Juventus' basketball team</PEd>
                <Year>2021/08 - 2022</Year>
              </LiEd>
            </div>
            <div>
              <LiEd>
                <H4>Physiotherapist</H4>
                <PEd>Uab 'Slauga ir Priežiūra'</PEd>
                <Year>2022-2023</Year>
              </LiEd>
            </div>
          </Ul>
        </DivW>
      </DivHist>
      <DivWorks>
        <H3>You can see my works here:</H3>
        <Button href="#works">WORKS</Button>
      </DivWorks>
    </StyledAbout>
  );
}

export default About;
