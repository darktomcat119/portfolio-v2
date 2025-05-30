import '@/styles/globals.css';
import { Metadata } from 'next';
import NunitoFonts from '@/utils/fonts';
import { GoogleAnalytics } from '@/components';
import {
  OFFICIAL_AUTHOR_URL,
  OFFICIAL_OG_IMAGE_URL,
  OFFICIAL_PLATOFORM_TWITTER_URL,
  OFFICIAL_TWITTER_IMAGE_URL,
} from '@/utils/constants';

/** @dev initialize nunito font */
const nunito = NunitoFonts;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Kanivets Denys',
  description:
    'Full-stack Blockchain Software Developer Senior Smart Contract Developer',
  authors: {
    name: 'Denys (a.k.a. Quiet Node)',
    url: OFFICIAL_PLATOFORM_TWITTER_URL,
  },
  keywords: [
    'Denys',
    'Denysn131',
    'Quiet Node',
    'Quiet0Node',
    'Portfolio',
    'Web 3.0 Developer portfolio',
    'Full-stack software developer portfolio',
    'smart contract developer portfolio',
  ],
  icons: {
    icon: '/brandings/avatar.jpg',
    shortcut: '/brandings/avatar.jpg',
  },
  metadataBase: new URL(OFFICIAL_AUTHOR_URL),
  alternates: {
    canonical: '/',
  },

  // ######## OG ########
  openGraph: {
    siteName: "Quiet Node's Portfolio",
    title: 'Quiet Node | Portfolio',
    description:
      'Full-stack Web 3.0 Software Developer | DLT Enthusiast | Junior Smart Contract Developer',
    locale: 'en_US',
    type: 'website',
    url: '/',
    images: {
      url: OFFICIAL_OG_IMAGE_URL,
      alt: 'Quiet Node',
      width: 240,
      height: 240,
    },
  },

  // ######## Twitter ########
  twitter: {
    card: 'summary_large_image',
    site: OFFICIAL_AUTHOR_URL,
    creator: '@courage',
    creatorId: '1525316662429360131',
    title: 'Quiet Node | Portfolio',
    description:
      'Full-stack Web 3.0 Software Developer | DLT Enthusiast | Junior Smart Contract Developer',
    images: {
      url: OFFICIAL_TWITTER_IMAGE_URL,
      alt: 'Syns Platform Social Image',
      width: 120,
      height: 120,
    },
  },
};
