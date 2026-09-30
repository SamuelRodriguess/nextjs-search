import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'
import MockDate from 'mockdate'
import { mswLoader } from 'msw-storybook-addon/csf3'
import { mswHandlers } from './msw-handlers'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="flex min-h-full flex-col font-sans">
        <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16">
          <Story />
        </main>
      </div>
    ),
  ],
  loaders: [mswLoader()],
  async beforeEach({ msw }) {
    msw.use(...mswHandlers)
    MockDate.set('2026-09-30T12:00:00Z')
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
}

export default preview
