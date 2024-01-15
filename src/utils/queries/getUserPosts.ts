import { useQuery } from "@tanstack/react-query";
import { BASE_URL, USERS_URL_PART, POSTS_URL_PART } from "../constants/constants";


export const getUserPosts = (userId: string) => {
  const url = `${BASE_URL}/${USERS_URL_PART}/${userId}/${POSTS_URL_PART}`;

  const fetchUserPosts = async () => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  }

  return useQuery({
    queryKey: ['getUserPosts'],
    queryFn: fetchUserPosts
  });
}