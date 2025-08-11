import localFont from 'next/font/local'

export const museoSans = localFont({
 src: [
  {
   path: '../public/fonts/MuseoSans100.woff2',
   weight: '100',
   style: 'normal',
  },
  {
   path: '../public/fonts/MuseoSans300.woff2',
   weight: '300',
   style: 'normal',
  },
  {
   path: '../public/fonts/MuseoSans500.woff2',
   weight: '500',
   style: 'normal',
  },
  {
   path: '../public/fonts/MuseoSans700.woff2',
   weight: '700',
   style: 'normal',
  },
  {
   path: '../public/fonts/MuseoSans900.woff2',
   weight: '900',
   style: 'normal',
  },
 ],
 variable: '--font-museo-sans',
 display: 'swap',
 preload: true,
 fallback: ['system-ui', 'Arial', 'sans-serif'],
 adjustFontFallback: false,
})
