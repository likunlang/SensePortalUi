import { ref, onMounted, onUnmounted, readonly, computed } from 'vue'

// 预定义的断点配置
export const breakpoints = {
  xs: 0,      // 超小屏幕
  sm: 640,    // 小屏幕
  md: 768,    // 中等屏幕
  lg: 1024,   // 大屏幕
  xl: 1280,   // 超大屏幕
  '2xl': 1536 // 2倍超大屏幕
} as const

export type Breakpoint = keyof typeof breakpoints

/**
 * 响应式屏幕宽度监听
 */
export function useScreenWidth() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)

  const update = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
    
    // 设备类型判断
    isMobile.value = width.value < breakpoints.md
    isTablet.value = width.value >= breakpoints.md && width.value < breakpoints.lg
    isDesktop.value = width.value >= breakpoints.lg
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return {
    width: readonly(width),
    height: readonly(height),
    isMobile: readonly(isMobile),
    isTablet: readonly(isTablet),
    isDesktop: readonly(isDesktop),
    update
  }
}

/**
 * 断点检测 Hook
 * @param customBreakpoints 自定义断点配置
 */
export function useBreakpoints(customBreakpoints = breakpoints) {
  const { width } = useScreenWidth()
  
  // 当前活动的断点
  const currentBreakpoint = computed(() => {
    const entries = Object.entries(customBreakpoints)
      .sort(([, a], [, b]) => b - a) // 从大到小排序
    
    for (const [name, breakpoint] of entries) {
      if (width.value >= breakpoint) {
        return name
      }
    }
    return 'xs'
  })

  // 断点匹配函数
  const is = computed(() => (breakpoint: Breakpoint) => {
    return currentBreakpoint.value === breakpoint
  })

  const isAbove = computed(() => (breakpoint: Breakpoint) => {
    return width.value >= customBreakpoints[breakpoint]
  })

  const isBelow = computed(() => (breakpoint: Breakpoint) => {
    return width.value < customBreakpoints[breakpoint]
  })

  const isBetween = computed(() => (min: Breakpoint, max: Breakpoint) => {
    return width.value >= customBreakpoints[min] && 
           width.value < customBreakpoints[max]
  })

  return {
    width: readonly(width),
    current: readonly(currentBreakpoint),
    is,
    isAbove,
    isBelow,
    isBetween,
    breakpoints: customBreakpoints
  }
}

/**
 * 媒体查询 Hook
 * @param query 媒体查询字符串
 */
export function useMediaQuery(query: string) {
  const matches = ref(false)
  
  const mediaQuery = window.matchMedia(query)
  
  const update = () => {
    matches.value = mediaQuery.matches
  }
  
  onMounted(() => {
    update()
    mediaQuery.addEventListener('change', update)
  })
  
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', update)
  })
  
  return readonly(matches)
}