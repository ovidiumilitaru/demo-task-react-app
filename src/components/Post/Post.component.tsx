'use client';

import styled from 'styled-components';
import type { userDetailsType, userPostType} from '@/utils/types/types';
import SideBarComponent from '@/components/SideBar/SideBar.component';
import PostContentComponent from '@/components/Post/PostContent.component';

interface Props {
  userDetails: userDetailsType | undefined,
  post: userPostType | undefined,
}
export default function PostComponent({ userDetails, post }: Props) {

  return (
    <PostWrapper>
      <SideBarComponent 
        userName={userDetails?.name} 
        userId={userDetails?.id} 
      />
      <PostContentComponent post={post} />
    </PostWrapper>
  )
}

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;
