import { MovieDetail } from './../../../types/index';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { latestApi } from '../../../apis/moviApi';

const useLatestMovie = () => {
	return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
		'latestMovie',
		latestApi
	);
};

export default useLatestMovie;
