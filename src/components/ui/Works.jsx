/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const StyledWorks = styled.section`
  background-color: #1a1a1a;
  padding: 10rem 20rem;
  @media only screen and (max-width: 1024px) {
    padding: 10rem 10rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }
`;
const H2 = styled.h2`
  font-size: 5rem;
  text-align: center;
  color: #39b54a;
`;
const H3 = styled.h3`
  font-size: 2rem;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid whitesmoke;
  border-radius: 10px;
  color: whitesmoke;
  margin-top: 5rem;
  padding: 1rem;
  transition: 0.3s;
  :hover {
    background-color: #484848;
    transition: 0.3s;
  }
  @media only screen and (max-width: 768px) {
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Img = styled.img`
  margin-top: 1rem;
  height: 11.6rem;
`;
const P = styled.p`
  margin-top: 0.5rem;
`;
const PSite = styled.p`
  margin-top: 0.5rem;
  font-size: 2rem;
`;
const A = styled.a`
  margin-top: 0.5rem;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.5s;
  :hover {
    color: #39b54a;
    transition: 0.5s;
  }
`;
function Works() {
  return (
    <StyledWorks>
      <H2>My Works</H2>
      <Container>
        <Div>
          <H3>CSS responsive design</H3>
          <P>It's html and css project with responsive design </P>
          <Img src="/src/images/html-css-proj.png" alt="" />
          <div>
            <PSite>
              Project github repository:
              <A
                href="https://github.com/LukasZarnauskas/Lukas_-arnauskas_HTML_CSS_responsive.git"
                target="_blank"
              >
                Github
              </A>
            </PSite>
            <PSite>
              You can see it in my website:
              <A
                href="https://lukas-zarnauskas-responsive-design.netlify.app/"
                target="_blank"
              >
                Web
              </A>
            </PSite>
          </div>
        </Div>
        <Div>
          <H3>TIC-TAC-TOE game</H3>
          <P>Game made with react</P>
          <Img src="/src/images/Tic-tac.png" alt="Tic-Tac" />
          <div>
            <PSite>
              Project github repository:
              <A
                href="https://github.com/LukasZarnauskas/tic-tac-toe-react_game.git"
                target="_blank"
              >
                Github
              </A>
            </PSite>
            <PSite>
              You can see it in my website:
              <A
                href="https://lukas-zarnauskas-tic-tac-toe.netlify.app/"
                target="_blank"
              >
                Web
              </A>
            </PSite>
          </div>
        </Div>
        <Div>
          <H3>Shops-web</H3>
          <P>
            Web with registration and login function made with react and
            firebase
          </P>
          <Img src="/src/images/shops-web.png" alt="Shops-web" />
          <div>
            <PSite>
              Project github repository:
              <A
                href="https://github.com/LukasZarnauskas/Web-atsiskaitymas.git"
                target="_blank"
              >
                Github
              </A>
            </PSite>
            <PSite>
              You can see it in my website:
              <A
                href="https://web-of-lukas-zarnauskas.netlify.app/"
                target="_blank"
              >
                Web
              </A>
            </PSite>
          </div>
        </Div>
        <Div>
          <H3>Portfolio page</H3>
          <P>My portfolio page made with react and styled components.</P>
          <Img src="/src/images/shops-web.png" alt="Shops-web" />
          <div>
            <PSite>
              Project github repository:
              <A
                href="https://github.com/LukasZarnauskas/Portfolio-web.git"
                target="_blank"
              >
                Github
              </A>
            </PSite>
            <PSite>
              You can see it in my website:
              <A
                href="https://web-of-lukas-zarnauskas.netlify.app/"
                target="_blank"
              >
                Web
              </A>
            </PSite>
          </div>
        </Div>
      </Container>
    </StyledWorks>
  );
}

export default Works;
