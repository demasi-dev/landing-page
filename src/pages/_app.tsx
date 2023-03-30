import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import { Raleway } from 'next/font/google';

import '@/styles/globals.css';
import awsExports from '../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

const raleway = Raleway({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-light dark:bg-dark ${raleway.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
