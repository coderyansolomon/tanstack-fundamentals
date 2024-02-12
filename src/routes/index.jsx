import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent(){
  return (
    <main>
      <h2>Welcome Home</h2>
    </main>
  )
}