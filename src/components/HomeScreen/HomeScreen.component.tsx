'use client';

import { useRouter } from 'next/navigation';
import styled from "styled-components";
import { getRandomUser } from "@/utils/getters/getRandomUser";
import { COLORS } from '@/utils/constants/colors';
import Button from '@/components/atoms/Button/Button.component';


export default function HomeScreenComponent() {
  const router = useRouter();

  const clickHandler = () => {
    console.log("CLICK")
    const userId: string = getRandomUser();
    router.push(`/dashboard/${userId}`);
  };

  return (
    <HomePageWrapper>
      <Title $textColor={ COLORS.PRIMARY_BLUE }>This Demo App uses following technology stack:</Title>
      <Text $textColor={ COLORS.PRIMARY_BLUE }>Next.js</Text>
      <Text $textColor={ COLORS.PRIMARY_BLUE }>React.js</Text>
      <Text $textColor={ COLORS.PRIMARY_BLUE }>TypeScript</Text>
      <Text $textColor={ COLORS.PRIMARY_BLUE }>Styled Components</Text>
      <Text $textColor={ COLORS.PRIMARY_BLUE }>React Query</Text>
      <Divider />
      <Text $textColor={ COLORS.GREEN }>Click the button below to randomize a user id and proceed</Text>
      <Divider />

      <Button onClick={clickHandler} text="Click me!" />
    </HomePageWrapper>
  )
}

const HomePageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3<{ $textColor?: string }>`
  font-size: 24px;
  padding: 4px 0;
  color: ${ (props) => props.$textColor || COLORS.BLACK}};
`;

const Text = styled.p<{ $textColor?: string }>`
  font-size: 16px;
  padding: 4px 0;
  color: ${ (props) => props?.$textColor || COLORS.BLACK};
`;

const Divider = styled.div`
  height: 8px;
`