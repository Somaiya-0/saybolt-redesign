// Optimized WebP copies of the sayboltgroup.com photos live in /public/img (1080px for phones, 1920px otherwise).
const W = typeof window !== 'undefined' && window.innerWidth * window.devicePixelRatio <= 1600 ? 1080 : 1920
export const pic = (name: string) => `${import.meta.env.BASE_URL}img/${name}-${W}.webp`
