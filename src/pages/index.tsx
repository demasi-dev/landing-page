import Head from 'next/head';
import Image from 'next/image';

import logo from '@/assets/logo.svg';
import ThemeChanger from '@/components/ThemeChanger';

export default function Home() {
  return (
    <>
      <Head>
        <title>De Masi Development</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col">
        <div className="flex">
          <ThemeChanger />
        </div>

        <div className="flex h-full flex-col justify-center">
          <div className="flex flex-col gap-2 items-center">
            <Image src={logo} alt="Logo DD" height={150} />
            <h3 className="dark:text-light">De Masi Development</h3>
            <span className="text-sm dark:text-light">
              Website coming soon...
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
