import debounce from 'lodash.debounce'

export const useScroll = () => useState('scroll', () => {

  const handleScroll = () => {
    useScroll().value = window.scrollY
  }
  const handleDebouncedScroll = debounce(handleScroll, 100, { leading: true, trailing: true, maxWait: 100 })
  window.addEventListener('scroll', handleDebouncedScroll)

  return window.scrollY
})


export const useScreenSize = () => useState('size', () => {
  const handleResize = () => {
    useScreenSize().value = window.innerWidth
    useTailwind().value = calculateTailwind(window.innerWidth)
  }
  const handleDebouncedResize = debounce(handleResize, 100, { leading: true, trailing: true, maxWait: 100 })
  window.addEventListener('resize', handleDebouncedResize)

  return window.innerWidth
})

const calculateTailwind = (size) => {
  let breakpoints = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536,
  }
  for (let breakpoint in breakpoints) {
    breakpoints[breakpoint] = size > breakpoints[breakpoint]
  }
  return breakpoints
}

export const useTailwind = () => useState('tailwind', () => calculateTailwind(useScreenSize().value))