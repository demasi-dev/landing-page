import Head from 'next/head';
import Image from 'next/image';

import logo from '@/assets/logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>De Masi Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-full bg-light">
        <div className="flex h-full justify-center items-center">
          <div className="flex flex-col gap-2 items-center">
            <Image src={logo} alt="Logo DD" height={150} />
            <h3>De Masi Development</h3>
            <span className="text-sm">Website coming soon...</span>
          </div>
        </div>
      </main>
    </>
  );
}
