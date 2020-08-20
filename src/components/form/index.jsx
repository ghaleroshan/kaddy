import React from "react";
import styled from "styled-components";
import { asRem } from "../../helper";

const FormContainer = styled.form`
  max-width: ${asRem(720)};
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${asRem(20)} ${asRem(20)};
  position: relative;
  display: flex;
  justify-self: center;
  flex-wrap: wrap;
  transition: all 0.2s;

  @media (max-width: ${asRem(780)}) {
    width: ${asRem(420)};
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: ${asRem(20)};
  font-weight: 200;
  background-color: #15141b;
  padding: ${asRem(16)} ${asRem(40)};
  border-radius: ${asRem(50)};
  border: 1px solid #ddd;
  color: #ddd;
  outline: none;
  cursor: pointer;

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  @media (max-width: ${asRem(780)}) {
    font-size: ${asRem(16)};
    padding: ${asRem(14)} ${asRem(20)};
  }
`;

const Button = styled.button`
  position: absolute;
  top: 35%;
  right: 5%;
  background: none;
  border: none;
  outline: none;

  @media (max-width: ${asRem(780)}) {
    top: 38%;
    right: 10%;
  }
`;

const Icon = styled.i`
  color: #ddd;
  cursor: pointer;
  font-size: ${asRem(24)};

  @media (max-width: ${asRem(780)}) {
    font-size: ${asRem(14)};
  }
`;

export const InputForm = ({ handleChange, handleClick }) => {
  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="Begin your search..."
        onInput={handleChange}
      />
      <Button onClick={handleClick}>
        <Icon className="fas fa-search"></Icon>
      </Button>
    </FormContainer>
  );
};
