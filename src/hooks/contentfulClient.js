import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_AUTH_TOKEN,
  host: import.meta.env.VITE_CONTENTFUL_HOST
});

export default client
