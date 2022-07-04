export default {
  inserted: (el: HTMLElement) => {
    function loadImage(): void {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName === 'IMG'
      )
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('lazy-image--loaded'), 100)
        })
        imageElement.addEventListener('error', (e: any) =>
          console.error('[👹] Image load error', e)
        )
        const url = imageElement.getAttribute('data-url')
        if (url) {
          imageElement.setAttribute('src', url)
        }
      }
    }

    function handleIntersect(
      entries: IntersectionObserverEntry[],
      observer: any
    ) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0,
      }
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(el)
    }
    if (window.IntersectionObserver) {
      createObserver()
    } else {
      loadImage()
    }
  },
}
