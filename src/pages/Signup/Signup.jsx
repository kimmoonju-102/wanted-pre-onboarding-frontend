// import {useState} from "react";
import { useRef } from "react";
import styled from "styled-components/macro";
import {InputWithLabel} from "@/components/InputWithLabel/InputWithLabel"
import { Button } from "@/components/Button/Button";

export function Signup() {
  const usernameRef = useRef()
  console.log(usernameRef)

  console.log("re-rendered")
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <StyledSignup onSubmit={handleSubmit}>
      <InputWithLabel
        className="input" 
        // label="이메일" 
        name="email" 
        placeholder="이메일"

      />
      <InputWithLabel 
        className="input"
        // label="비밀번호" 
        name="password" 
        placeholder="비밀번호" 
        type="password"
      />
      <InputWithLabel 
        className="input"
        // label="비밀번호 확인" 
        name="passwordConfirm" 
        placeholder="비밀번호 확인" 
        type="password"
      />
      <Button>확인</Button>
    </StyledSignup>
  )
}

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

    & .input {
      padding: 15px;
      margin: 10px 0;
      border-radius: 2px solid red;
    }
`