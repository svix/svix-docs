import React, { useCallback, useMemo, useState } from 'react';
import styles from './CopyDocsButton.module.css';

export default function CopyDocsButton({ pageTitle, sourceMarkdown }) {
  const [copied, setCopied] = useState(false);
  const label = useMemo(() => (copied ? 'Copied' : 'Copy Docs for LLM'), [copied]);

  const onClick = useCallback(async () => {
    await navigator.clipboard.writeText(sourceMarkdown || '');
    window.analytics.track(`${pageTitle} | Copy Docs for LLM`, {
      path: window.location.pathname,
      title: pageTitle,
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
      {label}
    </button>
  );
}
