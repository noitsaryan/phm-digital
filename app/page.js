'use client'
import Brand from '@/components/Brand';
import Influencer from '@/components/Influencer';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  FaBullseye,
  FaUsers,
  FaHandshake,
  FaCheckCircle,
  FaChartLine,
  FaDollarSign,
  FaShieldAlt,
  FaHandHoldingHeart
} from 'react-icons/fa'
function Home() {
  const [brand, setBrand] = useState(false);
  const [influencer, setInfluencer] = useState(false)

  const principles = [
    {
      icon: <FaBullseye className='mx-1 text-primary' />,
      title: "Client-Centric Goals",
      description: "Understand and align with your client's objectives and KPIs for tailored campaigns."
    },
    {
      icon: <FaUsers className='mx-1 text-primary' />,
      title: "Influencer Selection Mastery",
      description: "Carefully choose influencers who align with the brand and resonate with the target audience."
    },
    {
      icon: <FaHandshake className='mx-1 text-primary' />,
      title: "Transparency Pioneers",
      description: "Ensure influencers transparently disclose their brand relationships to build trust and comply with regulations."
    },
    {
      icon: <FaCheckCircle className='mx-1 text-primary' />,
      title: "Quality Assurance Excellence",
      description: "Review and approve influencer content to maintain the brand's image and message."
    },
    {
      icon: <FaChartLine className='mx-1 text-primary' />,
      title: "Data-Driven Insights",
      description: "Use analytics and reporting tools to measure campaign success and provide data-backed insights for future strategies."
    },
    {
      icon: <FaDollarSign className='mx-1 text-primary' />,
      title: "Budget Wizards",
      description: "Efficiently manage budgets, allocating resources to influencer fees, content creation, and promotion."
    },
    {
      icon: <FaShieldAlt className='mx-1 text-primary' />,
      title: "Crisis-Ready Approach",
      description: "Be prepared to manage unforeseen challenges swiftly and professionally to protect the brand's reputation."
    },
    {
      icon: <FaHandHoldingHeart className='mx-1 text-primary' />,
      title: "Building Long-Term Partnerships",
      description: "Foster enduring relationships with influencers and clients to maintain authenticity in campaigns."
    }
  ];

  const images = [
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Ranveer-Singh.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
    'https://letsinfluence.io/assets/influencers-new/Pushkar-Raj.jpeg',
  ]
  return (
    <main className='py-24'>
      <section className=' flex items-center flex-col justify-center space-y-8 '>
        <div className='flex items-center flex-col justify-center px-8'>
          <h1 className=' md:text-4xl text-3xl font-extrabold text-center text-dark'>
            Igniting Influence<span className='text-primary'>, </span>Amplifying Impact<span className='text-primary'>.</span>
          </h1>
          <p className='max-w-xl my-4 text-center font-medium' >
            We're here to transform your brand's potential into reality. Join us in crafting extraordinary brand experiences and igniting influence in today's media landscape.
          </p>
        </div>
        <div className='md:space-x-4 flex items-center md:space-y-0 space-y-5 justify-center md:flex-row flex-col'>
          <button onClick={() => setBrand(prev => !prev)} className='bg-primary w-48 text-white px-8 py-2 text-lg font-medium rounded-full'>
            Brand
          </button>
          <button onClick={() => setInfluencer(prev => !prev)} className='ring-2 ring-inset ring-primary  w-48 text-primary px-8 py-2 text-lg font-medium rounded-full'>
            Influencer
          </button>
        </div>
        <Image
          src='/home.png'
          width={1500}
          height={0}
          alt='bg'
          className='md:w-4/6 w-4/5  rounded-lg h-auto'
        />
      </section>
      <section className='py-8 space-y-5 relative'>
        <h1 className=' md:text-3xl text-2xl font-extrabold text-center text-dark'>
          Artists Deck<span className='text-primary'>.</span>
          <p className='text-center text-lg font-medium'>
            Meet our fantastic artists!
          </p>
        </h1>
        <div className='animation bg-white/75 space-x-5 w-full flex items-center justify-center '>
          <div className='slider space-x-5'>
            {images.map((e, i) => (
              <Image
                key={i}
                src={e}
                width={200}
                height={150}
                alt='influencersImages '
                className='slider-item rounded-md select-none'
              />
            ))}
          </div>
        </div>
        <div className='animation bg-white/75 space-x-5 w-full flex items-center justify-center '>
          <div className='slider2 space-x-5'>
            {images.map((e, i) => (
              <Image
                key={i}
                src={e}
                width={200}
                height={150}
                alt='influencersImages '
                className='slider-item rounded-md select-none'
              />
            ))}
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center'>
        <h1 className=' md:text-3xl text-2xl font-extrabold text-center text-dark'>
          Our 8 Core Practices for Success<span className='text-primary'>.</span>
          <p className='text-center text-lg font-medium mx-6'>
            Elevating Brands Through Strategic Influencer Partnerships
          </p>
        </h1>
        <div className='grid md:grid-cols-2 gap-4 px-8 py-8 max-w-7xl'>
          {
            principles.map((e, i) => {
              return <div key={i} className='text-dark border rounded-xl p-4 shadow-md'>
                <h1 className='font-bold text-lg flex items-center'>
                  {e.icon} {e.title}<span className='text-primary'>.</span>
                </h1>
                <p className='font-medium'>
                  {e.description}
                </p>
              </div>
            })
          }
        </div>
      </section>
      <section className='py-8 space-y-5'>
        <h1 className=' md:text-3xl text-2xl font-extrabold text-center text-dark'>
          Valued Industry Partners<span className='text-primary'>.</span>
          <p className='text-center text-lg font-medium mx-4'>
            Cultivating Strong Relationships with Esteemed Industry Partners
          </p>
        </h1>
        <div className='relative '>
          <div className='absolute h-full w-44 bg-gradient-to-r top-0 left-0 from-white to-transparent z-10' />
          <div className='absolute h-full w-44 bg-gradient-to-l top-0 right-0 from-white to-transparent z-10' />
          <div className='animation  bg-white/75 space-x-5 w-full flex items-center justify-center '>
            <div className='slider space-x-5'>
              {images.map((e, i) => (
                <Image
                  key={i}
                  src={e}
                  width={150}
                  height={150}
                  alt='influencersImages '
                  className='slider-item rounded-md select-none'
                />
              ))}
            </div>
          </div>
          <div className='animation my-4 bg-white/75 space-x-5 w-full flex items-center justify-center '>
            <div className='slider2 space-x-5'>
              {images.map((e, i) => (
                <Image
                  key={i}
                  src={e}
                  width={150}
                  height={150}
                  alt='influencersImages '
                  className='slider-item rounded-md select-none'
                />
              ))}
            </div>
          </div>
          <div className='animation bg-white/75 space-x-5 w-full flex items-center justify-center '>
            <div className='slider space-x-5'>
              {images.map((e, i) => (
                <Image
                  key={i}
                  src={e}
                  width={150}
                  height={150}
                  alt='influencersImages '
                  className='slider-item rounded-md select-none'
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className='flex items-center flex-col md:flex-row gap-4 mx-5  justify-around shadow-md border max-w-3xl md:mx-auto p-5 rounded-xl'>
        <h1 className='md:text-xl text-xl font-extrabold text-center text-dark'>
          Don't Hesitate<span className='text-primary'>. </span>Join Youthistaan Today<span className='text-primary'>!</span>
        </h1>
        <div className='md:space-x-4 flex items-center md:space-y-0 space-y-5 justify-center md:flex-row flex-col'>
          <button className='bg-primary w-36 text-white px-8 py-2 text-lg font-medium rounded-full'>
            Brand
          </button>
          <button className='ring-2 ring-inset ring-primary  w-36 text-primary px-8 py-2 text-lg font-medium rounded-full'>
            Influencer
          </button>
        </div>
      </div>
      {
        brand ? <Brand/> : null || influencer ? <Influencer/> : null
      }
    </main>
  )
}

export default Home