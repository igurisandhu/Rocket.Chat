import type { LicenseModule } from '@rocket.chat/core-typings';

// Modified to always return false as enterprise code has been removed
export const useHasLicenseModule = (_licenseName: LicenseModule | undefined): false => {
	return false;
};
