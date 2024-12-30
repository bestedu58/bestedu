import Image from "next/image";
import React from "react";

interface PdfViewerProps {
  contentType: string;
  url: string;
}

const Pdfviewer = ({ contentType, url }: PdfViewerProps) => {
  if (!url) return <p>no media sellected</p>;
  const imageTypes = contentType.startsWith("image");
  const documentTypes = [
    "docx",
    "doc",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  switch (true) {
    case documentTypes.includes(contentType):
      return (
        <iframe
          className="h-screen w-full border-none"
          title="pdf viewer"
          src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`}
        />
      );
    case imageTypes:
      return <Image src={url} width={500} height={500} alt="do" />;

    default:
      return <p> unsupported media type {contentType}</p>;
  }
};

export default Pdfviewer;
