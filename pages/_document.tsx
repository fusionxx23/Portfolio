import { Html, Head, Main, NextScript } from 'next/document'
import { useState, useEffect } from 'react';

export default function document() {


  return (
    <Html>
      <Head />
      <body className='overflow-y-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )

}
