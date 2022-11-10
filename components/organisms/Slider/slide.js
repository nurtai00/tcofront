export default class Slide {
  constructor(options) {
    if (typeof window !== 'undefined') {
      this.el = document.getElementById(options.id)
      this.options = options
      this.init()
    }
  }

  init() {
    this.wrapper = this.el.querySelector('.slider-wrapper')
    this.slides = this.el.querySelectorAll('.slide')
    if (this.options.pagination) {
      this.pagination = document.querySelectorAll(this.options.pagination)
      this.paginationInit()
    }
    if (this.options.navigation?.previous && this.options.navigation?.next) {
      this.previous = document.querySelector(this.options.navigation.previous)
      this.next = document.querySelector(this.options.navigation.next)
      this.navigationInit()
    }
    this.perview = this.options.slidesPerView ?? 1
    this.index = 0
    this.total = this.options.loop
      ? this.slides.length
      : this.slides.length - this.perview + 1
    this.setup()
    this.drag()
  }

  _slideTo() {
    const self = this
    if (
      self.index === self.total - 1 &&
      !self.options.loop &&
      self.options.navigation
    ) {
      self.next.style.display = 'none'
    }

    if (self.index === 0 && !self.options.loop && self.options.navigation) {
      self.previous.style.display = 'none'
    }

    if (self.options.loop) {
      if (self.index === self.slides.length - self.perview + 1) {
        self.slides[0].style.transition = 'none'
        self.slides[0].style.marginLeft = 'calc(-100%)'
        self.index = self.perview + 1
        setTimeout(() => {
          self.slides[0].style.transition = '0.5s ease'
          self.slides[0].style.marginLeft =
            'calc(-1 * ' + self.index / self.perview + ' * 100%)'
        }, 0)
      } else if (self.index === -1) {
        self.slides[0].style.transition = 'none'
        self.index = self.slides.length - self.perview * 2 - 1
        self.slides[0].style.marginLeft =
          'calc(-1 * ' + (self.index + 1) / self.perview + ' * 100%)'
        setTimeout(() => {
          self.slides[0].style.transition = '0.5s ease'
          self.slides[0].style.marginLeft =
            'calc(-1 * ' + self.index / self.perview + ' * 100%)'
        }, 0)
      } else {
        self.slides[0].style.marginLeft =
          'calc(-1 * ' + self.index / self.perview + ' * 100%)'
      }
    } else {
      self.slides[0].style.marginLeft =
        'calc(-1 * ' + self.index / self.perview + ' * 100%)'
    }
    if (this.options.slide) {
      this.options.slide(self._getCurrentIndex(self.index))
    }
  }

  _handleGesture(touchstartX, touchendX) {
    const self = this
    if (
      touchendX < touchstartX &&
      (self.index < self.total - 1 || self.options.loop)
    ) {
      self.index++
      if (self.options.navigation) {
        self.previous.style.display = 'block'
      }

      self._slideTo(self.index)
      self._highlightCurrentLink(self.index)
    } else if (
      touchendX > touchstartX &&
      (self.index > 0 || self.options.loop)
    ) {
      self.index--
      if (self.options.navigation) {
        self.next.style.display = 'block'
      }

      self._slideTo(self.index)
      self._highlightCurrentLink(self.index)
    }
  }

  drag() {
    const self = this
    let touchstartX, touchendX
    const touchableElement = document.querySelector('.slider-wrapper')
    if (window.innerWidth < 550) {
      touchableElement.addEventListener('touchstart', function (event) {
        touchstartX = event.touches[0].pageX
        event.preventDefault()
      })
      touchableElement.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].pageX

        self._handleGesture(touchstartX, touchendX)
      })
    } else {
      touchableElement.addEventListener('mousedown', function (event) {
        touchstartX = event.pageX
        event.preventDefault()
      })

      touchableElement.addEventListener('mouseup', function (event) {
        touchendX = event.pageX

        self._handleGesture(touchstartX, touchendX)
      })
    }
  }

  touch() {
    const self = this
    let touchstartX, touchendX
    const touchableElement = self.wrapper
    touchableElement.addEventListener('touchstart', function (event) {
      touchstartX = event.changedTouches[0].screenX
    })

    touchableElement.addEventListener('touchend', function (event) {
      touchendX = event.changedTouches[0].screenX
      handleGesture()
    })
    self._handleGesture(touchstartX, touchendX)
  }

  _highlightCurrentLink(link) {
    if (!this.pagination) {
      return
    }
    const self = this
    for (let i = 0; i < self.pagination.length; ++i) {
      const a = self.pagination[i]
      a.className = ''
    }

    self.pagination[self._getCurrentIndex(link)].className = 'current'
  }

  setup() {
    const self = this
    const slideWidth = self.el.offsetWidth / this.perview + 'px'
    if (self.options.loop) {
      const start = []
      const end = []
      let front, back
      for (let i = 0; i < self.perview; i++) {
        front = self.slides[i].cloneNode(true)
        back = self.slides[self.slides.length - (i + 1)].cloneNode(true)
        Object.keys(front.dataset).forEach((key) => {
          delete front.dataset[key]
        })
        Object.keys(back.dataset).forEach((key) => {
          delete back.dataset[key]
        })
        start.push(front)
        end.unshift(back)
      }

      if (self.options.loop) {
        self.slides = [...end, ...self.slides, ...start]
        self.wrapper.append(...start)
        self.wrapper.prepend(...end)
        self.slides[0].style.marginLeft = '-100%'
        self.index = self.perview
      }
    } else {
      self.previous.style.display = 'none'
    }
    for (let k = 0; k < self.slides.length; ++k) {
      self.slides[k].style.minWidth = slideWidth
      self.slides[k].style.maxWidth = slideWidth
      self.slides[k].style.overflow = 'hidden'
      self.slides[k].style.transition = '0.5s ease'
    }

    if (self.pagination) {
      for (let k = 0; k < self.total; k++) {
        const pagLink = self.pagination[k]
        pagLink.setAttribute('data-index', k)
      }
      self._highlightCurrentLink(self.index)
    }
  }

  navigationInit() {
    const self = this
    self.next.addEventListener(
      'click',
      function () {
        self.index++
        self.previous.style.display = 'block'

        self._slideTo(self.index)
        self._highlightCurrentLink(self.index)
      },
      false
    )

    self.previous.addEventListener(
      'click',
      function () {
        self.index--
        self.next.style.display = 'block'

        self._slideTo(self.index)
        self._highlightCurrentLink(self.index)
      },
      false
    )
  }

  paginationInit() {
    const self = this
    for (let i = 0; i < self.pagination.length; ++i) {
      const a = self.pagination[i]
      a.addEventListener(
        'click',
        function (e) {
          e.preventDefault()
          const n = parseInt(this.getAttribute('data-index'), 10)

          self.index = self.options.loop ? n + self.perview : n

          if (self.index > 0 && self.previous) {
            self.previous.style.display = 'block'
          }

          if (
            self.index !== self.total - 1 &&
            !self.options.loop &&
            self.next
          ) {
            self.next.style.display = 'block'
          }

          self._slideTo(self.index)

          self._highlightCurrentLink(self.index)
        },
        false
      )
    }
  }

  _getCurrentIndex(link = this.index) {
    const self = this
    if (self.options.loop) {
      if (link > self.slides.length - self.perview - 1) {
        return 0
      } else if (link < self.perview) {
        return self.slides.length - self.perview * 3 + link
      } else {
        return link - self.perview
      }
    } else {
      return link
    }
  }
}
