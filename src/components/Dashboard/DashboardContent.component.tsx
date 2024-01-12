import styled from "styled-components"
import type { userDetailsType } from "@/utils/types/types";
import { COLORS } from "@/utils/constants/colors";

interface Props {
  userDetails: userDetailsType | undefined
}

export default function DashboardContentComponent({userDetails}: Props) {

  return (
    <DashboardContentWrapper>
      <DetailsWrapper>
        <Title>User details:</Title>
        <Text>Username: {userDetails?.username}</Text>
        <Text>Email: {userDetails?.email}</Text>
        <Text>Phone: {userDetails?.phone}</Text>
        <Text>Website: www.{userDetails?.website}</Text>

        <Subtitle>Address:</Subtitle>
        <Text>City: {userDetails?.address.city}</Text>
        <Text>Street: {userDetails?.address.street}</Text>
        <Text>Street: {userDetails?.address.suite}</Text>
      </DetailsWrapper>

      <DetailsWrapper>
        <Title>Company details:</Title>
        <Text>Company name: {userDetails?.company.name}</Text>
        <Text>Industry: {userDetails?.company.bs}</Text>
        <Text>catchPhrase: {userDetails?.company.catchPhrase}</Text>

      </DetailsWrapper>
    </DashboardContentWrapper>
  )
};

const DashboardContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.GRAY};
  padding: 16px 24px 0;
  align-items: center;
  color: white;
`; 

const DetailsWrapper = styled.div`
  width: 50%;
  padding: 8px 16px;
  background-color: ${COLORS.SECONDARY_BLUE};
  border: 1px solid ${COLORS.WHITE};
  border-radius: 8px;
  margin-bottom: 32px;
`;

const Title = styled.h3`
  font-size: 24px;
  padding-bottom: 16px;
`;

const Subtitle = styled.h4`
  font-size: 18px;
  padding: 16px 0;
`;

const Text = styled.p`
  font-size: 14px;
  padding-bottom: 4px;
`
