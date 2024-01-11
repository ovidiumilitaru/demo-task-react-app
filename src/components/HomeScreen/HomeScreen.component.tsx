'use client';

import { Button as AntButton, Flex as AntFlex, Typography as AntTypography, Divider as AntDivider  } from 'antd';
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { getRandomUser } from "@/utils/getters/getRandomUser";

const { Title: AntTitle, Text: AntText } = AntTypography 

export default function HomeScreenComponent() {
  const router = useRouter();

  const clickHandler = () => {
    const userId: string = getRandomUser();
    router.push(`/dashboard/${userId}`);
  };

  return (
    <StyledFlexContainer>
        <AntTitle level={3}>This Demo App uses following technology stack:</AntTitle>
        <StyledText >Next.js</StyledText>
        <StyledText >React.js</StyledText>
        <StyledText >TypeScript</StyledText>
        <StyledText >Styled Components</StyledText>
        <StyledText >Ant Design</StyledText>
        <StyledText >React Query</StyledText>
        <StyledText type="success">Click the button below to randomize a user id and proceed</StyledText>
        <AntDivider />
      <StyledBigButton type='primary' onClick={clickHandler}>Click me!</StyledBigButton>
    </StyledFlexContainer>
  )
}

const StyledFlexContainer = styled(AntFlex)`
  border: 1px solid red;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(AntText)`
  font-size: 16px;
`;

const StyledBigButton = styled(AntButton)`
  width: 150px;
`;
