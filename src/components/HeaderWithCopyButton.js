import CopyDocsButton from './CopyDocsButton';

export default function HeaderWithCopyButton({ title, sourceMarkdown }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      <CopyDocsButton pageTitle={title} sourceMarkdown={sourceMarkdown} />
    </div>
  );
}
