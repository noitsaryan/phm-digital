import Image from 'next/image'
import React from 'react'

function Services() {
  const servicesData = [
    {
      topic: "Press Release",
      subtopics: [
        "News Coverages",
        "Hoardings",
        "Cab & Auto Rickshaw",
        "Pamphlets"
      ]
    },
    {
      topic: "Advertising",
      subtopics: ["Full 360-degree online & offline marketing"]
    },
    {
      topic: "Social Media",
      subtopics: [
        "Social Media Management (Fb&IG)",
        "Facebook, Instagram, YouTube & Google Ads"
      ]
    },
    {
      topic: "Creativity",
      subtopics: [
        "Graphic Designing",
        "Web Designing",
        "Movie Story Writing",
        "Content Writing"
      ]
    },
    {
      topic: "Brand",
      subtopics: [
        "Brand Management",
        "Production",
        "TVC/Ad Shoot"
      ]
    },
    {
      topic: "Artist",
      subtopics: [
        "Artist Management",
        "Celebrity & Influencer Marketing",
        "Casting"
      ]
    }
  ];
  return (
    <main className='py-8'>
      <h1 className='text-4xl font-black text-center text-dark'>
        Services<span className='text-primary'>.</span>
      </h1>
      <p className='text-center text-dark font-medium'>
        Empowering Brands, Delivering Excellence
      </p>
      <section>
        {
          servicesData.map((e, i) => {
            return <div key={i} className={`md:flex ${i % 2 === 0 ? 'flex-row-reverse' : ''} items-center justify-center md:space-x-12`}>
            <Image src='https://letsinfluence.io/assets/home-page/landing-img.webp' alt='Services' width={900} height={100} className='h-auto  md:max-w-lg' />
            <div className='px-4 text-center md:text-left'>
              <h1 className='text-3xl font-black  text-dark'>
                {e.topic}<span className='text-primary'>.</span>
              </h1>
              {
                e.subtopics.map((e, i) => {
                  return <p key={i} className=' text-dark font-medium'>
                  {e}
                </p>
                })
              }
            </div>
          </div>
          })
        }
      </section>
    </main>
  )
}

export default Services