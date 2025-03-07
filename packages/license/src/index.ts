/**
 * This is a placeholder module that replaces the enterprise license module.
 * It contains stubs for the functionality used by the open-source code.
 */

export class License {
  static hasValidLicense(): boolean {
    return false;
  }

  static hasModule(): boolean {
    return false;
  }

  static getModules(): string[] {
    return [];
  }
}

export class DuplicatedLicenseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DuplicatedLicenseError';
  }
}

export enum AirGappedRestriction {
  NONE = 'none',
  BLOCKED = 'blocked',
  ANALYTICS_ONLY = 'analytics_only',
}

// Add other exports needed by the application
export * from './validation'; 