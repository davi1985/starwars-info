import { useQuery } from 'react-query';
import { http } from '../service/api';
import { GetPeopleResponse } from './types';

export const getPeople = async (page: number): Promise<GetPeopleResponse> => {
  const { data } = await http.get<GetPeopleResponse>('/people', {
    params: { page },
  });

  return data;
};

export const usePeople = (page: number) => {
  return useQuery(['people', page], () => getPeople(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
