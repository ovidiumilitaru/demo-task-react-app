'use client';

import { Button as AntButton, Flex, Typography as AntTypography, Divider as AntDivider  } from 'antd';
import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { getRandomUser } from "@/utils/getters/getRandomUser";

const { Title: AntTitle, Text } = AntTypography 

export default function HomeScreenComponent() {
  const router = useRouter();

  const clickHandler = () => {
    const userId: string = getRandomUser();
    router.push(`/dashboard/${userId}`);
  };

  return (
    <AntFlexContainer>
        <AntTitle level={3}>This Demo App uses following technology stack:</AntTitle>
        <AntText >Next.js</AntText>
        <AntText >React.js</AntText>
        <AntText >TypeScript</AntText>
        <AntText >Styled Components</AntText>
        <AntText >Ant Design</AntText>
        <AntText >React Query</AntText>
        <AntText type="success">Click the button below to randomize a user id and proceed</AntText>
        <AntDivider />
      <AntButton type='primary' onClick={clickHandler}>Click me!</AntButton>
    </AntFlexContainer>
  )
}

const AntFlexContainer = styled(Flex)`
  border: 1px solid red;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AntText = styled(Text)`
  font-size: 16px;
`;
