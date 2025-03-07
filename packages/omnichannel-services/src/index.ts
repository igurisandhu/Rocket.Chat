/**
 * This is a placeholder module that replaces the enterprise omnichannel-services module.
 * It contains stubs for the functionality used by the open-source code.
 */

// Create a simple interface for our service
export interface IOmnichannelService {
  isEnterprise(): boolean;
}

export class OmnichannelService implements IOmnichannelService {
  isEnterprise(): boolean {
    return false;
  }
}

export default new OmnichannelService(); 