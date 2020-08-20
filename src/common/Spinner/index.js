import styled, { keyframes } from "styled-components";
import { asRem } from "../../helper";
const Rotation = keyframes`
  from{
    transform: rotate(0 deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: ${asRem(50)};
  height: ${asRem(50)};
  border-radius: 50%;
  border: ${asRem(10)} solid #e67e22;
  margin: ${asRem(10)} auto;
  border-top: none;
  border-right: none;
  animation: ${Rotation} 1s linear infinite;
`;
