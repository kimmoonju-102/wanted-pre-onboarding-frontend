import {useState} from "react";
import styled from "styled-components/macro";
import axios from 'axios';
import {InputWithLabel} from "@/components/InputWithLabel/InputWithLabel"
import { CustomButton } from "@/components/Button/CustomButton";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [focused, setFocused] = useState(false);
  const [values, setValues] = useState({
    email:"",
    password:"",
  });
  const navigate = useNavigate();

  const inputs = [
    {
      id:1,
      name:"email",
      type:"email",
      placeholder:"이메일",
      errorMessage:"유효한 이메일 형식이 아닙니다.",
      label:"Email",
      pattern:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      required: true,
      "data-testid": "email-input",
    },
    {
      id:2,
      name:"password",
      type:"text",
      placeholder:"비밀번호",
      errorMessage:"비밀번호는 최소 8자리 이상이여야 합니다.",
      label:"Password",
      pattern:"^[0-9]{8,}$",
      required: true,
      "data-testid": "password-input",
    },
  ];
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    try {
      await axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', { email, password });
      // 회원가입 성공시 필요한 처리
      alert('회원가입이 성공적으로 완료되었습니다!');
      navigate("/signin");
    } catch (error) {
      // 회원가입 실패시 필요한 처리
      alert(`회원가입에 실패했습니다: ${error.response.data.message}`);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  }

  const handleFocus = (e) => {
    setFocused(true);
  }

  return(
    <StyledSignup>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <InputWithLabel className="input" key={input.id} {...input} value={values[input.name]} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        ))}
        <CustomButton data-testid="signup-button" className="button" >회원가입</CustomButton>
      </form>
    </StyledSignup>
  )
}

const StyledSignup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

    & form {
      background-color: Lavender;
      padding: 0px 60px;
      border-radius: 10px;
    }

    h1 {
      text-align: center;
    }

    div {
      display: flex;
      flex-direction: column;
      width:280px;
    }

    & .input {
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid gray;
    }

    label {
      font-size: 12px;
      color: gray;
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

    span {
      font-size: 12px;
      padding: 3px;
      color: red;
      display: none;
    }

    input:invalid[focused="true"]{
      border: 1px solid red;
    }

    input:invalid[focused="true"] ~ span{
      display: block;
    }

`
