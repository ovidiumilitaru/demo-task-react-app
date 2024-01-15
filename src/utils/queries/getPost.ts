import { useQuery } from "@tanstack/react-query";
import { BASE_URL, POSTS_URL_PART } from "../constants/constants";


export const getPost = (id: string) => {
  const url = `${BASE_URL}/${POSTS_URL_PART}/${id}`;

  const fetchPost = async () => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  }

  return useQuery({
    queryKey: ['getPost'],
    queryFn: fetchPost
  });
}