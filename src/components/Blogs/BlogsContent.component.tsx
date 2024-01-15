'use client';

import styled from 'styled-components';
import { COLORS } from '@/utils/constants/colors';
import type { userPostsType, userPostType } from '@/utils/types/types';
import { useRouter } from 'next/navigation';

interface Props {
  userPosts: userPostsType | undefined;
};


export default function BlogsContentComponent( {userPosts} : Props) {
  const router = useRouter();

  const clickHandler = (post: userPostType) => {
    router.push(`/blogs/${post.userId}/post/${post.id}`)
  };

  const renderPost = (post: userPostType) => {
    return (
      <BlogPostWrapper key={post.id} onClick={() => clickHandler(post)}>
        <BlogPostTitle>{post.title}</BlogPostTitle>
        <BlogPostBody>{post.body}</BlogPostBody>
      </BlogPostWrapper>
    )
  };

  return (
    <BlogsContentWrapper>
      {userPosts?.map((post) => {
        return renderPost(post);
      })}
    </BlogsContentWrapper>
  )
}

const BlogsContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.GRAY};
  padding: 16px 24px 0;
  align-items: center;
  color: white;
`; 

const BlogPostWrapper = styled.button`
  width: 95%;
  background-color: ${COLORS.PRIMARY_BLUE};
  border: 1px solid ${COLORS.PRIMARY_BLUE};
  border-radius: 8px; 

  margin-bottom: 8px;
  padding: 16px 8px;
  color: white;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;

const BlogPostTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 8px;
`;

const BlogPostBody = styled.p`
  font-size: 14px;
`