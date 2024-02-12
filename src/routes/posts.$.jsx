import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$')({
  component: PostComponent,
})

function PostComponent() {
  const data  = Route.useParams()
  console.log({data})
  return <div>Post</div>
}