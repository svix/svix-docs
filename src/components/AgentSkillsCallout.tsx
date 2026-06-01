import { Callout } from 'nextra/components'

export function AgentSkillsCallout() {
  return (
    <Callout type="info">
      <strong>Building with an AI coding agent?</strong>{' '}
      <a className="underline" href="https://github.com/svix/svix-agent-skills">Svix Agent Skills</a> teach Claude, Cursor, and other agents to integrate Svix the right way. Install with <code>npx skills add svix/svix-agent-skills</code>.
    </Callout>
  )
}

export function ReceivingSkillCopy() {
  return (
    <>
      <strong>Building with an AI coding agent?</strong>{' '}
      The <a className="underline" href="https://github.com/svix/svix-agent-skills/tree/main/skills/receiving-webhooks"><code>receiving-webhooks</code></a> skill teaches Claude, Cursor, and other agents to verify webhooks the right way.<br />
      Install with <code>npx skills add svix/svix-agent-skills --skill receiving-webhooks</code>.
    </>
  )
}

export function ReceivingSkillCallout() {
  return (
    <Callout type="info">
      <ReceivingSkillCopy />
    </Callout>
  )
}
