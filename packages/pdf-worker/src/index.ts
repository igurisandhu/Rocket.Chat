/**
 * This is a placeholder module that replaces the enterprise pdf-worker module.
 * It contains stubs for the functionality used by the open-source code.
 */

export class PDFWorker {
  async generatePDF(): Promise<Buffer> {
    return Buffer.from('PDF generation is not available in the open-source version');
  }
}

export default new PDFWorker(); 