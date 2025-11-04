import React, { useCallback, useMemo, useState } from 'react';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';
import styles from './CopyDocsButton.module.css';

export default function CopyDocsButton({ pageTitle, sourceMarkdown }) {
  const [copied, setCopied] = useState(false);
  const label = useMemo(() => (copied ? 'Copied' : 'Copy Docs for LLM'), [copied]);

  const onClick = useCallback(async () => {
    await navigator.clipboard.writeText(sourceMarkdown || '');
    window.analytics.track(`Copy Docs for LLM`, {
      path: window.location.pathname,
      pageTitle,
    });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 3000);
  }, [sourceMarkdown]);

  return (
    <button
      type="button"
      className={styles.button}
      aria-label="Copy Docs for LLM"
      title="Copy Docs for LLM"
      onClick={onClick}
    >
      <span className={styles.icon}>
        {copied ? (
          <CheckIcon width={16} height={16} aria-hidden="true" />
        ) : (
          <ClipboardDocumentIcon width={16} height={16} aria-hidden="true" />
        )}
      </span>
      {label}
    </button>
  );
}
