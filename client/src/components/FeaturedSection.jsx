import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'

const FeaturedSection = () => {

    const navigate = useNavigate()

    const carData = dummyCarData.slice(0,6).map(car => {
        return (
            <div key={car._id}>
                <CarCard car={car} />
            </div>
        )
    })
  return (
    <section className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <Title 
                title='Featured Vehicles'
                subTitle='Explore our selection of premium vehicles available for your next adventure'
            />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
            {carData}
        </div>
        <button 
                onClick={() => {
                    navigate('/cars')
                    scrollTo(0,0)
                }}
                className='flex item-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
                Explore all cars <img src={assets.arrow_icon} alt="arrow icon" />
            </button>
    </section>
  )
}

export default FeaturedSection