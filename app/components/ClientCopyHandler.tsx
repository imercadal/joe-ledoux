'use client';

import { useEffect } from 'react';

const ClientCopyHandler: React.FC = () => {
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      const selectedText = window.getSelection()?.toString() || '';
      e.clipboardData?.setData('text/plain', selectedText);
    };

    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return null;
};

export default ClientCopyHandler;
