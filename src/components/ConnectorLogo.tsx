const LOGO_FILES: Record<string, string> = {
  closecrm: 'closecrm-icon.svg',
  customerio: 'customerio-icon.svg',
  discord: 'discord-icon.svg',
  hubspot: 'hubspot-icon.svg',
  loops: 'loops-icon.svg',
  'microsoft-teams': 'microsoft-teams-icon.svg',
  resend: 'resend-icon.svg',
  segment: 'segment-icon.svg',
  sendgrid: 'sendgrid-icon.svg',
  slack: 'slack-icon.svg',
  windmill: 'windmill-icon.svg',
  zapier: 'zapier-icon.svg',
  vercel: 'vercel-icon.svg',
  webhook: 'webhook-icon.svg',
  inngest: 'inngest-icon.png',
}

export default function ConnectorLogo({ name }: { name: string }) {
  const file = LOGO_FILES[name.toLowerCase()]
  if (!file) return null
  const src = `/img/connectors/logos/${file}`
  return (
    <span
      style={{
        display: 'inline-block',
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
        marginRight: '0.2em',
        marginBottom: 4,
      }}
    >
      <img
        src={src}
        alt={name}
        width={16}
        height={16}
        style={{ objectFit: 'contain', width: '100%', height: '100%', border: 'none', boxShadow: 'none' }}
      />
    </span>
  )
}
