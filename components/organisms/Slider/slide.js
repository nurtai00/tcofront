export default class Slide {
  constructor(options) {
    if (typeof window !== 'undefined') {
      this.el = document.getElementById(options.id)
      this.options = options
      this.init()
    }
  }

  init() {
    this.pagination = document.querySelectorAll(this.options.pagination)
    this.wrapper = this.el.querySelector('.slider-wrapper')
    this.slides = this.el.querySelectorAll('.slide')
    this.previous = document.querySelector(this.options.navigation.previous)
    this.next = document.querySelector(this.options.navigation.next)
    this.perview = this.options.slidesPerView ?? 1
    this.index = 0
    this.total = Math.ceil(this.slides.length / this.perview)
    this.setup()
    this.actions()
    this.drag()
  }

  _slideTo() {
    const self = this
    if (self.index === self.total - 1 && !self.options.loop) {
      self.next.style.display = 'none'
    }

    if (self.index === 0 && !self.options.loop) {
      self.previous.style.display = 'none'
    }

    if (self.options.loop) {
      if (self.index === self.slides.length) {
        self.slides[0].style.transition = 'none'
        self.slides[0].style.marginLeft =
          'calc(-1 * ' + self.perview + ' * 100%)'
        self.index = 2
        setTimeout(() => {
          self.slides[0].style.transition = '0.5s ease'
          self.slides[0].style.marginLeft =
            'calc(-1 * ' + self.index / self.perview + ' * 100%)'
        }, 0)
      } else if (self.index === -1) {
        self.slides[0].style.transition = 'none'
        self.index = self.slides.length - 3
        self.slides[0].style.marginLeft =
          'calc(-1 * ' + (self.slides.length - 2 / self.perview) + ' * 100%)'

        setTimeout(() => {
          self.slides[0].style.transition = '0.5s ease'
          self.slides[0].style.marginLeft =
            'calc(-1 * ' + self.index / self.perview + ' * 100%)'
        }, 0)
      } else {
        self.slides[0].style.marginLeft =
          'calc(-1 * ' + self.index / self.perview + ' * 100%)'
      }
    }
  }

  _handleGesture(touchstartX, touchendX) {
    const self = this
    if (
      touchendX < touchstartX &&
      (self.index < self.total - 1 || self.options.loop)
    ) {
      self.index++
      self.previous.style.display = 'block'

      self._slideTo(self.index)
      self._highlightCurrentLink(self.pagination[self.index])
    } else if (
      touchendX > touchstartX &&
      (self.index > 0 || self.options.loop)
    ) {
      self.index--
      self.next.style.display = 'block'

      self._slideTo(self.index)
      self._highlightCurrentLink(self.pagination[self.index])
    }
  }

  drag() {
    const self = this
    let touchstartX, touchendX
    const touchableElement = document.body
    touchableElement.addEventListener('mousedown', function (event) {
      touchstartX = event.pageX
      event.preventDefault()
    })

    touchableElement.addEventListener('mouseup', function (event) {
      touchendX = event.pageX

      self._handleGesture(touchstartX, touchendX)
    })
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
    const self = this
    for (let i = 0; i < self.pagination.length; ++i) {
      const a = self.pagination[i]
      a.className = ''
    }
    link.className = 'current'
  }

  setup() {
    const self = this
    const slideWidth = self.el.offsetWidth / this.perview + 'px'
    if (self.options.loop) {
      const first = self.slides[0].cloneNode(true)
      const last = self.slides[self.slides.length - 1].cloneNode(true)
      Object.keys(first.dataset).forEach((key) => {
        delete first.dataset[key]
      })
      Object.keys(last.dataset).forEach((key) => {
        delete last.dataset[key]
      })

      self.slides = [last, ...self.slides, first]
      self.wrapper.append(first)
      self.wrapper.prepend(last)

      self.slides[0].style.marginLeft = '-100%'
      self.index = 1
    }
    for (let k = 0; k < self.slides.length; ++k) {
      self.slides[k].style.minWidth = slideWidth
      self.slides[k].style.maxWidth = slideWidth
      self.slides[k].style.overflow = 'hidden'
      self.slides[k].style.transition = '0.5s ease'
    }
    for (let k = 0; k < self.total; ++k) {
      const pagLink = self.pagination[k]
      pagLink.setAttribute('data-index', k)
    }
  }

  actions() {
    const self = this
    self.next.addEventListener(
      'click',
      function () {
        self.index++
        self.previous.style.display = 'block'

        self._slideTo(self.index)
        self._highlightCurrentLink(self.pagination[self.index])
      },
      false
    )

    self.previous.addEventListener(
      'click',
      function () {
        self.index--
        self.next.style.display = 'block'

        self._slideTo(self.index)
        self._highlightCurrentLink(self.pagination[self.index])
      },
      false
    )

    for (let i = 0; i < self.pagination.length; ++i) {
      const a = self.pagination[i]
      a.addEventListener(
        'click',
        function (e) {
          e.preventDefault()
          const n = parseInt(this.getAttribute('data-index'), 10)

          self.index = n + 1

          if (self.index > 0) {
            self.previous.style.display = 'block'
          }

          if (self.index !== self.total - 1 && !self.options.loop) {
            self.next.style.display = 'block'
          }

          self._slideTo(self.index)

          self._highlightCurrentLink(this)
        },
        false
      )
    }
  }
}
