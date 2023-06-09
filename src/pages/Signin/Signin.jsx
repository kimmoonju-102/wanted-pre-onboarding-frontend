import { useState } from "react";
import axios from "axios";
import { CustomButton } from "@/components/Button/CustomButton";
import { InputWithLabel } from "@/components/InputWithLabel/InputWithLabel";
import styled from "styled-components/macro";
import { useNavigate } from 'react-router-dom';

export function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://www.pre-onboarding-selection-task.shop/auth/signin', {
        email: values.email,
        password: values.password,
      }, {headers: {
        "Content-Type": "application/json",
      }})
      localStorage.setItem("access_token", response.data.access_token);
      alert("로그인 성공!");
      navigate('/todos');
    } catch (error) {
      alert("로그인 실패!")
    }
  };

  return (
    <StyledSignin>
      <form onSubmit={handleSubmit}  className="signin">
        <h1>Singin</h1>
        <InputWithLabel 
          id="email"
          name="email"
          type="email"
          placeholder="이메일"
          label="Email"
          value={values.email}
          data-testid="email-input"
          onChange={handleChange}
        />
        <InputWithLabel 
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          label="Password"
          value={values.password}
          data-testid="password-input"
          onChange={handleChange}
        />
        <CustomButton data-testid="signin-button" className="button">로그인</CustomButton>
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