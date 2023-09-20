import '@/Styles/globals.css'
import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({
  subsets:['latin'],
  weight:'400',
})

export const metadata = {
  title: 'Youthistaan Media',
  description: "Unlock the Power of Influencer Marketing with Youthistaan Media. Elevate your brand's reach and engagement through top influencers. Discover trending strategies for influencer marketing success."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
