import { useQuery } from 'react-query';
import { http } from '../service/api';
import { GetPlanetsResponse } from './types';

export const getPlanets = async (page: number): Promise<GetPlanetsResponse> => {
  const { data } = await http.get<GetPlanetsResponse>('/planets', {
    params: { page },
  });

  return data;
};

export const usePlanets = (page: number) => {
  return useQuery(['planets', page], () => getPlanets(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
