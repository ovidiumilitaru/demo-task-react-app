import styled from "styled-components"
import { COLORS } from "@/utils/constants/colors"

interface Props {
  text: string;
  textSize: string;
  linkTo: string;
}
export default function BigButtonComponent({text, linkTo, textSize}: Props) {

  return (
    <StyledBigButton href={linkTo} textSize={textSize} >{text}</StyledBigButton>
  )
}


const StyledBigButton = styled.a<{ textSize: string; }>`
  background-color: ${COLORS.PRIMARY_BLUE};
  padding: 8px;
  font-size: ${ props => props.textSize === 'big' ? '20px' : '16px' }; 
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