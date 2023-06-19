import styled from "styled-components";

const StyledCotact = styled.section`
  background-color: #39b54a;
  padding: 10rem 20rem;
  @media only screen and (max-width: 1024px) {
    padding: 10rem 10rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 5rem;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  @media only screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
  @media only screen and (max-width: 768px) {
    gap: 2rem;
  }
`;
const H2 = styled.h2`
  font-size: 5rem;
  text-align: center;
`;
const H3 = styled.h3`
  margin-top: 5rem;
  font-size: 3rem;
  color: white;
`;
const H4 = styled.h4`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;
const A = styled.a`
  transition: 0.3s;
  :hover {
    color: black;
  }
`;
const P = styled.p`
  transition: 0.3s;

  :hover {
    color: black;
  }
`;

function Contact() {
  return (
    <StyledCotact id="contact">
      <H2>Contact</H2>
      <H3>Contact info</H3>
      <Div>
        <div>
          <H4>Call My At</H4>
          <P>+37060802922</P>
        </div>
        <div>
          <H4>Email My At</H4>
          <P>zarnauskas97@gmail.com</P>
        </div>
        <div>
          <H4>Message My At</H4>
          <A href="https://m.me/100001239875605/" target="_blank">
            <i className="fa-brands fa-facebook-messenger"></i> Messenger
          </A>
          <br />
          <A href="https://linkedin.com/in/lukaszarnauskas" target="_blank">
            <i className="fa-brands fa-linkedin"></i> Linkedin
          </A>
        </div>
        <div>
          <H4>All my works at</H4>
          <A href="https://github.com/LukasZarnauskas" target="_blank">
            <i className="fa-brands fa-github"></i> Github
          </A>
        </div>
      </Div>
    </StyledCotact>
  );
}

export default Contact;
