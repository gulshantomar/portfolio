import type { NextConfig } from "next";


import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.com','cdn.simpleicons.org','i.ibb.co','img.icons8.com','assets.aceternity.com'],
  },
}
 
const withMDX = createMDX({
  
  extension: /\.(md|mdx)$/,
})
 
export default withMDX(nextConfig)