import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export function Home() {
  
  return(
    <StyledHome>
      <header>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li><li>
            <Link to="/signin">로그인</Link>
          </li><li>
            <Link to="/todos">할 일 목록</Link>
          </li>
        </ul>
      </header>
      <h2>
        메인페이지
      </h2>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  header {
    width:100%;
    height: 150px;
    background-color: lavender;
  }

  h1{
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
  
  h2 {
    text-align: center;
  }
`