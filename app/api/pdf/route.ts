import { NextRequest, NextResponse } from 'next/server';
import PDFParser from 'pdf2json';

export async function POST(req: NextRequest) {
  try {
    const formData: FormData = await req.formData();
    const uploadedFiles = formData.getAll('filepond');
    let parsedText = '';

    if (!uploadedFiles?.length) {
      return NextResponse.json(
        { error: 'No files uploaded' },
        { status: 400 }
      );
    }

    const uploadedFile = uploadedFiles[1];
    if (!(uploadedFile instanceof File)) {
      return NextResponse.json(
        { error: 'Invalid file format' },
        { status: 400 }
      );
    }

    // Process PDF directly from memory
    const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());
    parsedText = await parsePDFBuffer(fileBuffer);

    return NextResponse.json({
      success: true,
      text: parsedText
    });

  } catch (error) {
    console.error('PDF processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process PDF' },
      { status: 500 }
    );
  }
}

// Helper function to parse PDF buffer
function parsePDFBuffer(buffer: Buffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const pdfParser = new (PDFParser as any)(null, 1);

    pdfParser.on('pdfParser_dataError', (errData: any) => {
      reject(new Error(errData.parserError));
    });

    pdfParser.on('pdfParser_dataReady', () => {
      const parsedText = (pdfParser as any).getRawTextContent();
      resolve(parsedText);
    });

    // Parse directly from buffer instead of file
    pdfParser.parseBuffer(buffer);
  });
}