import { useMutation } from "@tanstack/react-query";
import { BASE_URL, POSTS_URL_PART, METHOD } from "@/utils/constants/constants";
import type { userPostType } from "@/utils/types/types";

export const updatePostMutation = (payload: userPostType) => {
  const url = `${BASE_URL}${POSTS_URL_PART}/${payload.id.toString()}`;
  const method = METHOD.PUT;

  const fetchUpdatePost = async () => {
    const result = await fetch(url, { 
      method,
      body: JSON.stringify({
        id: payload.id,
        title: payload.title,
        body: payload.body,
        userId: payload.userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    const response = await result.json();
    return response
  }

  return useMutation({
    mutationFn: fetchUpdatePost
  });
}

