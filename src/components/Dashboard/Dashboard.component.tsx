'use client';

import type { userDetailsType } from '@/utils/types/types';
import styled from 'styled-components';
import SideBarComponent from '@/components/SideBar/SideBar.component';
import DashboardContentComponent from '@/components/Dashboard/DashboardContent.component';

interface Props {
  userDetails: userDetailsType | undefined
}

export default function DashboardComponent({userDetails}: Props) {

  return (
    <DashboardWrapper >
      <SideBarComponent 
        userName={userDetails?.name} 
        userId={userDetails?.id}
      />
      <DashboardContentComponent userDetails={userDetails}/>
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;