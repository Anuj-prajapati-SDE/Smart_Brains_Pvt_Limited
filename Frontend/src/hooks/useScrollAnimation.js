import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollAnimation — Reusable GSAP ScrollTrigger hook
 * 
 * Applies scroll-triggered entrance animations to child elements
 * matching the given selector within the container ref.
 *
 * @param {string} selector - CSS selector for elements to animate (default: '[data-animate]')
 * @param {object} options  - GSAP animation overrides
 */
export function useScrollAnimation(selector = '[data-animate]', options = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Wait one frame so the DOM is fully painted before GSAP measures positions
    const frameId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const elements = containerRef.current?.querySelectorAll(selector)
        if (!elements || elements.length === 0) return

        elements.forEach((el) => {
          const type = el.dataset.animate || 'fade-up'
          const delay = parseFloat(el.dataset.animateDelay) || 0
          const duration = parseFloat(el.dataset.animateDuration) || 0.8

          // Stagger animation for grid/list items
          if (type === 'stagger-up') {
            const children = el.children
            if (children.length > 0) {
              gsap.fromTo(children,
                { y: 60, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.12,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: el,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                    ...options.scrollTrigger,
                  },
                }
              )
            }
            return
          }

          // Build "from" and "to" states
          const fromVars = { opacity: 0 }
          const toVars = { opacity: 1, duration, delay, ease: 'power3.out' }

          switch (type) {
            case 'fade-up':
              fromVars.y = 60
              toVars.y = 0
              break
            case 'fade-down':
              fromVars.y = -60
              toVars.y = 0
              break
            case 'fade-left':
              fromVars.x = -80
              toVars.x = 0
              break
            case 'fade-right':
              fromVars.x = 80
              toVars.x = 0
              break
            case 'fade-in':
              // pure opacity — no transform
              break
            case 'scale-up':
              fromVars.scale = 0.85
              fromVars.y = 40
              toVars.scale = 1
              toVars.y = 0
              break
            case 'slide-up':
              fromVars.y = 100
              toVars.y = 0
              toVars.ease = 'power4.out'
              break
            default:
              fromVars.y = 60
              toVars.y = 0
          }

          gsap.fromTo(el, fromVars, {
            ...toVars,
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
              ...options.scrollTrigger,
            },
            ...options,
          })
        })

        // Force ScrollTrigger to recalculate all positions after setup
        ScrollTrigger.refresh()
      }, containerRef)

      // Store ctx for cleanup
      containerRef._gsapCtx = ctx
    })

    return () => {
      cancelAnimationFrame(frameId)
      if (containerRef._gsapCtx) {
        containerRef._gsapCtx.revert()
      }
    }
  }, [selector])

  return containerRef
}

/**
 * useParallax — Subtle parallax scrolling for background images/elements
 */
export function useParallax(selector = '[data-parallax]', speed = 0.3) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const frameId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const elements = containerRef.current?.querySelectorAll(selector)
        if (!elements || elements.length === 0) return

        elements.forEach((el) => {
          const s = parseFloat(el.dataset.parallaxSpeed) || speed

          gsap.to(el, {
            yPercent: s * 100,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        })

        ScrollTrigger.refresh()
      }, containerRef)

      containerRef._gsapCtx = ctx
    })

    return () => {
      cancelAnimationFrame(frameId)
      if (containerRef._gsapCtx) {
        containerRef._gsapCtx.revert()
      }
    }
  }, [selector, speed])

  return containerRef
}

/**
 * useCountUp — Animate numbers counting up on scroll
 */
export function useCountUp(selector = '[data-count]') {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const frameId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        const elements = containerRef.current?.querySelectorAll(selector)
        if (!elements || elements.length === 0) return

        elements.forEach((el) => {
          const target = el.dataset.count || el.textContent
          const numericValue = parseInt(target.replace(/[^0-9]/g, ''), 10)
          const suffix = target.replace(/[0-9]/g, '') // e.g. '+', 'k'

          if (isNaN(numericValue)) return

          const obj = { value: 0 }
          gsap.to(obj, {
            value: numericValue,
            duration: 1.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.value) + suffix
            },
          })
        })

        ScrollTrigger.refresh()
      }, containerRef)

      containerRef._gsapCtx = ctx
    })

    return () => {
      cancelAnimationFrame(frameId)
      if (containerRef._gsapCtx) {
        containerRef._gsapCtx.revert()
      }
    }
  }, [selector])

  return containerRef
}
