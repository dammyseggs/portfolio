import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/Logo.png' width={125} height={125} priority alt='' />
    </Link>
  )
}

export default Logo