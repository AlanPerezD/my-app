import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'l6tnvzei',
  dataset: 'production',
  apiVersion: '2022-03-10', // use current UTC date - see "specifying API version"!
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

// this is another way of creating a function urlFor (source) { return builder.image(source } ) }
export const urlFor = (source) => builder.image(source);