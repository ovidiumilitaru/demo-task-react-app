import styled from "styled-components"
import { COLORS } from "@/utils/constants/colors"


interface Props {
  text: string;
  textSize: string;
  linkTo: string;
  onClick?: () => void;
}

export default function Link({text, linkTo, textSize}: Props) {

  return (
    <StyledLink href={linkTo} $textSize={textSize} >{text}</StyledLink>
  )
}


const StyledLink = styled.a<{ $textSize: string; }>`
  background-color: ${COLORS.PRIMARY_BLUE};
  padding: 8px;
  font-size: ${ (props) => `${props.$textSize}px` }; 
  display: inline-block;
  border: 1px solid white;
  border-radius: 8px;

  margin-bottom: 24px;
  min-width: 120px;
  text-align: center;

  &:hover {
    background-color: ${COLORS.WHITE};
    color: ${COLORS.SECONDARY_BLUE};
  }
`