import { Callout } from 'nextra/components'

export function AgentSkillsCallout() {
  return (
    <Callout type="info">
      <strong>Building with an AI coding agent?</strong>{' '}
      <a className="underline" href="https://github.com/svix/svix-agent-skills">Svix Agent Skills</a> teach Claude, Cursor, and other agents to integrate Svix the right way. Install with <code>npx skills add svix/svix-agent-skills</code>.
    </Callout>
  )
}
