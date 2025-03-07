/**
 * This is a placeholder for the license validation functionality.
 */

export interface ValidationResult {
  valid: boolean;
  limit: number;
  current: number;
  unlimited: boolean;
}

export function validateWarnLimit(): ValidationResult {
  return {
    valid: true,
    limit: Infinity,
    current: 0,
    unlimited: true,
  };
}

export function validateLimit(): ValidationResult {
  return {
    valid: true,
    limit: Infinity,
    current: 0,
    unlimited: true,
  };
} 