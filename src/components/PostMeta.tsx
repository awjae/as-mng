import { PostMetaType } from '@/type'
import Head from 'next/head'
import React from 'react'

function PostMeta({ title, subTitle, description, imageURL}: PostMetaType) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={subTitle}/>
      <meta property="og:image" content={imageURL}/>
    </Head>
  )
}

export default PostMeta