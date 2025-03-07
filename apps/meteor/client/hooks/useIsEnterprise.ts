import type { UseQueryResult } from '@tanstack/react-query';

// Modified to always return false for isEnterprise since enterprise code has been removed
export const useIsEnterprise = (): UseQueryResult<{ isEnterprise: boolean }> => {
	return {
		data: { isEnterprise: false },
		isSuccess: true,
		isLoading: false,
		isError: false,
		status: 'success',
		error: null,
		isFetching: false,
		isRefetching: false,
		isPending: false,
		dataUpdatedAt: Date.now(),
		errorUpdatedAt: 0,
		failureCount: 0,
		failureReason: null,
		errorUpdateCount: 0,
		refetch: async () => ({ data: { isEnterprise: false }, isSuccess: true, isStale: false })
	} as UseQueryResult<{ isEnterprise: boolean }>;
};
