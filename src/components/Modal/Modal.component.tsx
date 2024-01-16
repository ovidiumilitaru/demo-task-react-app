'use client';

import { SetStateAction, useState, useEffect } from 'react';
import styled from "styled-components";
import { COLORS } from "@/utils/constants/colors";
import { MODAL_VARIANT } from "@/utils/constants/constants";
import { deletePostMutation } from '@/utils/queries/deletePost';
import { updatePostMutation } from '@/utils/queries/updatePost';
import { useRouter } from "next/navigation";
import { userPostType } from '@/utils/types/types';

interface Props {
  modalIsVisible: boolean;
  variant: string;
  userId: string | undefined;
  postId: string | undefined;
  postTitle: string | undefined;
  postBody: string | undefined;
  closeModal: () => void;
}

export default function ModalComponent({modalIsVisible, variant, userId, postId, postTitle, postBody, closeModal }: Props) {
  const router = useRouter();
  const [delSaveBtnClicked, setDelSaveBtnClicked] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedBody, setUpdatedBody] = useState('');
  const [payload, setPayload] = useState<userPostType>({ id: 0, title: '', body: '', userId: 0 });

  useEffect(() => {
    if(modalIsVisible) {
      setUpdatedTitle(postTitle!);
      setUpdatedBody(postBody!);
    }
  }, [modalIsVisible, postTitle, postBody])

  const { 
    isPending: deleteMutationIsPending, 
    isError: deleteMutationIsError, 
    isSuccess: deleteMutationIsSuccess, 
    mutate: deleteMutate 
  } = deletePostMutation(postId!);

  const {
    isPending: updateMutationIsPending,
    isError: updateMutationIsError,
    isSuccess: updateMutationIsSuccess,
    mutate: updateMutate
  } = updatePostMutation(payload);

  const renderDeleteInfo = () => {
    return (
      <>
        {deleteMutationIsPending && (
          <TextInfo $color={deleteMutationIsSuccess ? COLORS.GREEN : COLORS.RED}>
            Pending, please wait...
          </TextInfo>
        )}

        {deleteMutationIsSuccess && (
          <TextInfo $color={deleteMutationIsSuccess ? COLORS.GREEN : COLORS.RED}>
            Success! Post with id {postId} was deleted.
          </TextInfo>
        )}

        {deleteMutationIsError && (
          <TextInfo $color={deleteMutationIsSuccess ? COLORS.GREEN : COLORS.RED}>
            Something went wrong! Try again later!
          </TextInfo>
        )}

        {(!deleteMutationIsPending && !deleteMutationIsSuccess && !deleteMutationIsError) && (
          <TextInfo $color={deleteMutationIsSuccess ? COLORS.GREEN : COLORS.RED}>
            Are you sure you want to delete this blog post?
            </TextInfo>
          )}
      </>
    )
  };

  const renderUpdateInfo = () => {
    return (
      <>
        {updateMutationIsPending && (
          <TextInfo $color={updateMutationIsSuccess ? COLORS.GREEN : COLORS.RED}>
            Pending, please wait...
          </TextInfo>
        )}

        {updateMutationIsSuccess && (
          <TextInfo $color={updateMutationIsSuccess ? COLORS.GREEN : COLORS.RED}>
            Success! Post with id {postId} was updated.
          </TextInfo>
        )}

        {updateMutationIsError && (
          <TextInfo $color={updateMutationIsSuccess ? COLORS.GREEN : COLORS.RED}>
            Something went wrong! Try again later!
          </TextInfo>
        )}
      </>
    )
  }

  const updateTitleHandler = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUpdatedTitle(e.target.value);
  };
  
  const renderEditForm = () => {
    return (
      <>
      <FormWrapper>
        <InputWrapper>
          <Label>Post title:</Label>
          <Input 
            type="text" 
            defaultValue={updatedTitle} 
            onChange={updateTitleHandler} 
            disabled={delSaveBtnClicked}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Post content:</Label>
          <Textarea 
            rows={5} 
            defaultValue={updatedBody} 
            disabled={delSaveBtnClicked}
          />
        </InputWrapper>
      </FormWrapper>
      {renderUpdateInfo()}
      </>
    )
  };

  const deletePostHandler = () => {
    setDelSaveBtnClicked(true);
    deleteMutate();
  };

  const savePostHandler = () => {
    setDelSaveBtnClicked(true);
    setPayload({
      id: +postId!,
      userId: +userId!,
      title: updatedTitle,
      body: updatedBody
    })
    updateMutate();
  }

  const backToBlogPosts = () => {
    closeModal();
    setDelSaveBtnClicked(false);
    setUpdatedTitle('');
    setUpdatedBody('');
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
  transform: translateY(-30%);
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
`;

const FormWrapper = styled.div`
  padding: 16px 8px 32px;
  margin-bottom: 8px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 8px;
  background-color: ${COLORS.GRAY};
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  padding: 4px 1px;
`;

const Input = styled.input`
  padding: 4px 1px;
  margin-bottom: 8px;
  border: 1px solid ${COLORS.GRAY};
`;

const Textarea = styled.textarea`
  padding: 4px 1px;
  border: 1px solid ${COLORS.GRAY};

`;