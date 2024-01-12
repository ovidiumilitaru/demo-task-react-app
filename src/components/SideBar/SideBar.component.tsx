'use client'

import styled from "styled-components";
import { COLORS } from "@/utils/constants/colors";
import BigButtonComponent from "@/components/atoms/Button/BigButton.component";

interface Props {
  userName: string | undefined;
  userId: number | undefined;
}
export default function SideBarComponent({userName, userId}: Props) {

  return (
    <SideBarWrapper>
      <BigButtonComponent linkTo="/" text="Go to HomePage" textSize="big" />
      <UserSummaryWrapper>
        <RoundImageWrapper>
          <ImageProfile src={`/assets/images/userId_${userId}.jpg`} alt="test alt" /> 
        </RoundImageWrapper>
        <WelcomeText>Live long & prosper,</WelcomeText>
        <WelcomeText>{ userName }</WelcomeText>
        <WelcomeText>ID = {userId}</WelcomeText>
      </UserSummaryWrapper>
      <BigButtonComponent linkTo='/dashboard/1' text="Dashboard" textSize="medium" />
      <BigButtonComponent linkTo='/posts/1' text="Blog posts" textSize="medium" />
    </SideBarWrapper>
  )
}

const SideBarWrapper = styled.div`
  width: 20%;
  min-height: 100vh;
  background-color: ${COLORS.PRIMARY_BLUE};
  color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px 8px;
`;

const UserSummaryWrapper = styled.div`
  margin-bottom: 24px;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RoundImageWrapper = styled.div`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
`;

const ImageProfile = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;

`

const WelcomeText = styled.p`
  font-size: 16px;
  padding: 4px 0px;
`