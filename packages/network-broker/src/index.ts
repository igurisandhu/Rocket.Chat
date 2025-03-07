/**
 * This is a placeholder module that replaces the enterprise network-broker module.
 * It contains stubs for the functionality used by the open-source code.
 */

export class NetworkBroker {
  static getInstance() {
    return new NetworkBroker();
  }

  async register() {
    return false;
  }

  async broadcast() {
    return false;
  }
}

export default new NetworkBroker(); 