import clsx from 'clsx'
import { Image } from 'nextra/components'

export default {
  components: {
    img: function DocsImage({ className, ...props }) {
      return (
        <Image
          className={clsx('dark:bg-slate-50 rounded-md shadow-xs', className)}
          {...props}
        />
      )
    },
  },
}
