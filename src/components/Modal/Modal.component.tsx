'use client';

import { useState } from 'react';
import styled from "styled-components";
import { COLORS } from "@/utils/constants/colors";
import { MODAL_VARIANT } from "@/utils/constants/constants";
import { deletePostMutation } from '@/utils/queries/deletePost';
import { useRouter } from "next/navigation";
// import { BASE_URL } from "@/utils/constants/constants";

interface Props {
  modalIsVisible: boolean;
  variant: string;
  userId: string | undefined;
  postId: string | undefined;
  closeModal: () => void;
}

export default function ModalComponent({modalIsVisible, variant, userId, postId, closeModal }: Props) {
  const router = useRouter();
  const [delSaveBtnClicked, setDelSaveBtnClicked] = useState(false);
  const { isPending, isError, isSuccess, mutate } = deletePostMutation(postId!);

  const renderDeleteInfo = () => {
    return (
      <>
      {isPending && (
        <TextInfo $color={isSuccess ? COLORS.GREEN : COLORS.RED}>
          Pending, please wait...
        </TextInfo>
      )}

      {isSuccess && (
        <TextInfo $color={isSuccess ? COLORS.GREEN : COLORS.RED}>
          Success! Post with id {postId} was deleted.
        </TextInfo>
      )}

      {isError && (
        <TextInfo $color={isSuccess ? COLORS.GREEN : COLORS.RED}>
          Something went wrong! Try again later!
        </TextInfo>
      )}

      {(!isPending && !isSuccess && !isError) && (
        <TextInfo $color={isSuccess ? COLORS.GREEN : COLORS.RED}>
          Are you sure you want to delete this blog post?
          </TextInfo>
        )}
      </>
    )
  };

  const renderEditForm = () => {
    return (
      <p>Edit form</p>
    )
  };

  const deletePostHandler = () => {
    setDelSaveBtnClicked(true);
    mutate();
  };

  const savePostHandler = () => {
    console.log("Save post");
    setDelSaveBtnClicked(true);
  }

  const backToBlogPosts = () => {
    closeModal();
    router.push(`/blogs/${userId}`);
  }

  return (
    <>
      <ModalOverlay $modalIsVisible={modalIsVisible} onClick={closeModal} />
        <ModalWrapper $modalIsVisible={modalIsVisible}>
          <ModalTitle>{variant} post</ModalTitle>
          {variant === MODAL_VARIANT.DELETE ? renderDeleteInfo() : renderEditForm()}
          <ButtonsWrapper>
            <ModalButton onClick={backToBlogPosts}>Back to blog posts</ModalButton>

            <ModalButton 
              onClick={closeModal}
              disabled={delSaveBtnClicked} 
              $isDisabled={delSaveBtnClicked}
            >
              Cancel
            </ModalButton>

            <ModalButton 
              onClick={variant === MODAL_VARIANT.EDIT ? savePostHandler : deletePostHandler} 
              disabled={delSaveBtnClicked} 
              $isDisabled={delSaveBtnClicked}
            >
              {variant === MODAL_VARIANT.EDIT ? 'Save' : 'Delete'}
            </ModalButton>
          </ButtonsWrapper>
        </ModalWrapper>
    </>
  )
}

const ModalOverlay = styled.div<{ $modalIsVisible: boolean }>`
  display: ${(props) => `${ props.$modalIsVisible ? 'block' : 'none' }` };
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000004a;
  transition: opacity 0.2s ease;
`;

const ModalWrapper = styled.div<{ $modalIsVisible: boolean }>`
  display: ${(props) => `${ props.$modalIsVisible ? 'block' : 'none' }` };
  width: 800px;
  position: relative;
  margin: 0 auto;
  padding: 16px;
  background-color: ${COLORS.WHITE};
  border-radius: 8px;
  color: ${ COLORS.BLACK};
  transform: translateY(-100%);
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px 3px;
`;

const ModalTitle = styled.h2`
  text-align: center;
  padding-bottom: 16px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px; 
`;

const ModalButton = styled.button<{ $isDisabled?: boolean }>`
  display: inline-block;
  border: 1px solid ${COLORS.PRIMARY_BLUE};
  border-radius: 8px;
  padding: 8px 16px;
  margin: 0 16px;
  width: 120px;

  &:hover {
    cursor: ${ props => props.$isDisabled ? 'not-allowed' : 'pointer'};
    color: ${ props => props.$isDisabled ? null : COLORS.SECONDARY_BLUE };
    font-weight: ${ props => props.$isDisabled ? null : 'bold'};
  }
`;

const TextInfo = styled.p<{ $color: string}>`
  color: ${props => props.$color};
  text-align: center;
`