import { Cards } from 'nextra/components'
import Image from 'next/image'

export function SlackJoinLink() {
  return (
    <Cards num={1}>
      <Cards.Card
        href="https://www.svix.com/slack/"
        title="Join our Slack community"
        icon={<Image src="/img/slack.svg" alt="" width={20} height={20} />}
        className="w-fit"
      />
    </Cards>
  )
}
