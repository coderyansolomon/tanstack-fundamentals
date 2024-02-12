import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/settings/')({
  component: () => <div>Hello /about/settings!</div>
})