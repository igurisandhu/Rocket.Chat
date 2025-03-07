// Modified to always return false since enterprise code has been removed
export async function hasLicense(_feature: string): Promise<boolean> {
	return false;
}
