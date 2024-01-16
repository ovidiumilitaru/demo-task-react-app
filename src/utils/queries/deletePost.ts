import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL, POSTS_URL_PART, METHOD } from "@/utils/constants/constants";

export const deletePostMutation = (postId: string) => {
  const queryClient = useQueryClient();
  const url = `${BASE_URL}${POSTS_URL_PART}/${postId}`;
  const method = METHOD.DELETE;

  const fetchDeletePost = async () => {
    const result = await fetch(url, { method });
    return result;
  }

  return useMutation({
    mutationFn: fetchDeletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getPost']});
      queryClient.invalidateQueries({ queryKey: ['getUserPosts']});
    }
  });
}
