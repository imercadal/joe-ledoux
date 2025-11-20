"use client";

interface PdfIframeProps {
    file: string;
    height?: string;
}

export default function PdfIframe({ file, height = "90vh" }: PdfIframeProps) {
    return (
        <iframe
            src={file}
            className="w-full border-0"
            style={{ height }}
            title="PDF Document"
        />
    );
}
