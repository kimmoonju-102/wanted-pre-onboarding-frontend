import { CustomButton } from "@/components/Button/CustomButton";
import { InputWithLabel } from "@/components/InputWithLabel/InputWithLabel";
import styled from "styled-components/macro";

export function Signin() {
  return (
    <StyledSignin>
      <form className="signin">
        <h1>Singin</h1>
        <InputWithLabel />
        <InputWithLabel />
        <CustomButton className="button">로그인</CustomButton>
      </form>
    </StyledSignin>
  );
}

const StyledSignin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .signin {
    background-color: Lavender;
    padding: 0px 60px;
    border-radius: 10px;
  }

  h1 {
    text-align: center;
  }

  input {
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid gray;
  }

  label {
    font-size: 12px;
    color: gray;
  }

  div {
      display: flex;
      flex-direction: column;
      width:280px;
    }

    & .button {
      width: 100%;
      height: 50px;
      padding: 10px;
      border: none;
      background-color: white;
      color: black;
      border-radius: 5px;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      margin-top: 15px;
      margin-bottom: 30px;
    }

`