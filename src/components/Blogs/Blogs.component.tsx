'use client';

import styled from "styled-components";
import SideBarComponent from "../SideBar/SideBar.component";
import BlogsContentComponent from "./BlogsContent.component";
import type { userDetailsType, userPostsType  } from '@/utils/types/types';

interface Props {
  userDetails: userDetailsType | undefined;
  userPosts: userPostsType | undefined;
};

export default function BlogsComponent({userDetails, userPosts}: Props) {

  return (
    <BlogsWrapper>
      <SideBarComponent 
        userName={userDetails?.name} 
        userId={userDetails?.id}
      />
      <BlogsContentComponent userPosts={userPosts}/>
    </BlogsWrapper>
  )
};

const BlogsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
`;