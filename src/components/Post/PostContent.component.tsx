'use client';

import { useState } from "react";
import styled from "styled-components";;
import { COLORS } from "@/utils/constants/colors";
import type { userPostType } from "@/utils/types/types";
import ModalComponent from "@/components/Modal/Modal.component";
import { MODAL_VARIANT } from '@/utils/constants/constants'

interface Props {
  post: userPostType | undefined,
}
export default function PostContentContainer({ post }: Props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalVariant, setModalVariant] = useState(MODAL_VARIANT.EDIT);

  const openModal = () => {
    setModalIsVisible(true);
  }

  const closeModal = () => {
    setModalIsVisible(false);
  }

  const editHandler = () => {
    setModalIsVisible(true);
    setModalVariant(MODAL_VARIANT.EDIT)

  };

  const deleteHandler = () => {
    setModalIsVisible(true);
    setModalVariant(MODAL_VARIANT.DELETE)
  };

  return (
    <PostContentWrapper>
      <PostWrapper>
        <PostTitle>{post?.title}</PostTitle>
        <PostBody>{post?.body}</PostBody>
        <PostEditButtonWrapper>
          <PostButton onClick={editHandler}>Edit</PostButton>
          <PostButton onClick={deleteHandler}>Delete</PostButton>
        </PostEditButtonWrapper>
      </PostWrapper>

      <ModalComponent 
        closeModal={closeModal} 
        modalIsVisible={modalIsVisible} 
        variant={modalVariant} 
        userId={post?.userId.toString()}
        postId={post?.id.toString()}
      />
    </PostContentWrapper>
  )
};

const PostContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.GRAY};
  padding: 16px 24px 0;
  align-items: center;
  color: white;
`; 

const PostWrapper = styled.div`
  width: 95%;
  background-color: ${COLORS.PRIMARY_BLUE};
  border: 1px solid ${COLORS.PRIMARY_BLUE};
  border-radius: 8px; 
  margin-bottom: 8px;
  padding: 16px 8px;
  color: white;
  text-align: left;
`; 

const PostTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 32px;
  text-align: center;
`;

const PostBody = styled.p`
  font-size: 14px;
`;

const PostEditButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px; 
`;

const PostButton = styled.button`
  display: inline-block;
  border: 1px solid ${COLORS.PRIMARY_BLUE};
  border-radius: 8px;
  padding: 8px 16px;
  margin: 0 16px;
  width: 120px;

  &:hover {
    cursor: pointer;
    color: ${COLORS.SECONDARY_BLUE};
    font-weight: bold;
  }
`;