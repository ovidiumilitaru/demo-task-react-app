import { useMutation } from "@tanstack/react-query";
import { BASE_URL, POSTS_URL_PART, METHOD } from "@/utils/constants/constants";

export const deletePostMutation = (postId: string) => {
  const url = `${BASE_URL}${POSTS_URL_PART}/${postId}`;
  const method = METHOD.DELETE;

  const fetchDeletePost = async () => {
    const result = await fetch(url, { method });
    return result;
  }

  return useMutation({
    mutationFn: fetchDeletePost
  });
}
