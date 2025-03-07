/**
 * This is a placeholder module that replaces the enterprise presence module.
 * It contains stubs for the functionality used by the open-source code.
 */

export class PresenceService {
  async getConnectionCount(): Promise<number> {
    return 0;
  }

  async isOnline(): Promise<boolean> {
    return false;
  }
}

export default new PresenceService(); 