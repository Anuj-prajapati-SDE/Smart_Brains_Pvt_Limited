import React, { useEffect, useState } from 'react'
import './HeroPage.css'

import {Hero_Slider_1,Hero_Slider_2,Hero_Slider_3,Hero_Slider_4, Hero_Slider_5, Hero_Slider_6, Hero_Slider_7, Hero_Slider_8,Hero_Slider_9} from '../../../assets/index'
const slidesData = [
  {
    name: "Skilling Projects",
    des: "Building Future-Ready Talent & Workforce",
    bgImage: Hero_Slider_2,
    badge: "EMPOWER"
  },
  {
    name: "IT & ITeS Services",
    des: "Transforming Businesses Through Technology.",
    bgImage: Hero_Slider_1,
    badge: "DIGITAL"
  },
   {
    name: "Vocational Labs",
    des: "Experiential Learning for Future Careers.",
    bgImage: Hero_Slider_9,
    badge: "DISCOVER"
  },
  {
    name: "Staffing Serivces",
    des: "Delivering Talent That Drives Success.",
    bgImage: Hero_Slider_3,
    badge: "CONNECT"
  },
  {
    name: "CSR Projects",
    des: "Creating Sustainable Social Transformation",
    bgImage: Hero_Slider_5,
    badge: "IMPACT"
  },
  {
    name: "STEAM Education",
    des: "Inspiring Creativity, Science & Innovation",
    bgImage: Hero_Slider_4,
    badge: "INNOVATE"
  },
   {
    name: "AgriTech  & Hydroponics",
    des: "Revolutionizing Agriculture Through Technology.",
    bgImage: Hero_Slider_8,
    badge: "GROW"
  },
  {
    name: "EPC & Earthworks",
    des: "Delivering Excellence in Infrastructure & Energy.",
    bgImage: Hero_Slider_6,
    badge: "ENGINEER"
  },
 
 
 
]

const HeroPage = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [slideProgress, setSlideProgress] = useState(0)

  const moveNext = () => {
    setActiveSlide((prev) => (prev + 1) % slidesData.length)
    setSlideProgress(0)
  }

  const movePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length)
    setSlideProgress(0)
  }

  // const handleIndicatorClick = (index) => {
  //   setActiveSlide(index)
  //   setSlideProgress(0)
  // }

  useEffect(() => {
    if (isHovered) {
      return
    }

    const totalDuration = 2500 // 3 seconds total
    let animationFrameId
    let startTime = null
    
    // Resume from current progress position
    const startProgress = slideProgress
    const startElapsed = (startProgress / 100) * totalDuration

    const updateProgress = (timestamp) => {
      if (!startTime) {
        startTime = timestamp - startElapsed
      }

      const elapsed = timestamp - startTime
      const currentProgress = Math.min((elapsed / totalDuration) * 100, 100)

      setSlideProgress(currentProgress)

      if (elapsed >= totalDuration) {
        setActiveSlide((curr) => (curr + 1) % slidesData.length)
        setSlideProgress(0)
      } else {
        animationFrameId = requestAnimationFrame(updateProgress)
      }
    }

    animationFrameId = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovered, activeSlide])

  return (
    <>
    <div 
      className="hero-slider-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slide">
        {slidesData.map((slide, index) => {
          const isActive = activeSlide === index
          const isPrevious = (activeSlide - 1 + slidesData.length) % slidesData.length === index
          
          return (
            <div
              key={index}
              className={`item ${isActive ? 'active' : ''} ${isPrevious ? 'previous' : ''}`}
              style={{
                backgroundImage: `url("${slide.bgImage}")`
              }}
            >
              <div className="content">
                {slide.badge && (
                  <span className="badge">
                    {slide.badge}
                  </span>
                )}
                <div className="name">{slide.name}</div>
                <div className="des">{slide.des}</div>
                <a
                  className="seeMore"
                  target="_blank"
                  rel="noopener noreferrer"
                  href=""
                >
                  {/* <button className="seeMoreBtn group">
                    <span>See More</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button> */}
                </a>
              </div>
            </div>
          )
        })}
      </div>
      {/* Glassmorphic Navigation Buttons */}
      <div className="slider-button">
        <button className="prev" onClick={movePrev} aria-label="Previous Slide">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="next" onClick={moveNext} aria-label="Next Slide">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
    
</>
  )
}

export default HeroPage