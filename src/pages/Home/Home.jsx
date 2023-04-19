import styled from "styled-components/macro";

export function Home() {
  
  return(
    <StyledHome>
      <header>
        <h1>Home</h1>
        <ul>
          <a href="/">
            <li>홈</li>
          </a>
          <a href="/signup">
            <li>회원가입</li>
          </a>
          <a href="/signin">
            <li>로그인</li>
          </a>
          <a href="/todos">
            <li>할 일 목록</li>
          </a>
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