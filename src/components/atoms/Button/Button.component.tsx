import styled from "styled-components";
import { COLORS } from "@/utils/constants/colors";

interface Props {
  text: string;
  onClick?: () => void;
};

export default function Button(props: Props) {

  return (
    <Btn onClick={props.onClick}>{props.text}</Btn>
  )
} 

const Btn = styled.button`
  background-color: ${COLORS.PRIMARY_BLUE};
  width: 160px;
  height: 40px;
  border: 1px solid ${COLORS.PRIMARY_BLUE};
  border-radius: 8px;
  color: ${COLORS.WHITE};

  &:hover {
    cursor: pointer;
    opacity: 0.80;
  }
`