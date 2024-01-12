import { useQuery } from "@tanstack/react-query";
import { BASE_URL, USERS_URL_PART } from "../constants/constants";


export const getUserDetails = (userId: string) => {
  const url = `${BASE_URL}${USERS_URL_PART}/${userId}`;

  const fetchUserDetails = async () => {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  }

  return useQuery({
    queryKey: ['getUserDetails'],
    queryFn: fetchUserDetails
  });
}