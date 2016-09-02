class Anchorage {
  constructor (cn) {
    const headlines = this.headlines(cn)

    for (let i = 0; i < headlines.length; i++) {
      const txt = this.parser(headlines[i])
      const count = i + 1
      const ref = `${txt}-${count}`

      this.setter(headlines[i], ref)
      this.link(headlines[i], this.element(ref))
    }
  }

  headlines (x) {
    const cln = document.querySelector(x)
    const xh = cln.querySelectorAll('h1, h2, h3, h4, h5, h6')

    return xh
  }

  parser (x) {
    let s = x.innerHTML
    return s.toLowerCase().replace(' ', '-')
  }
  setter (x, y) {
    if (!x.hasAttribute('id')) {
      x.setAttribute('id', y)
    }
  }

  // Creates Link Element
  element (y) {
    const ref = `#${y}`
    const elm = document.createElement('a')
    const t = document.createTextNode('link')

    elm.appendChild(t)
    elm.setAttribute('href', ref)
    elm.setAttribute('class', 'small')

    return elm
  }

  // Appends Link Element
  link (x, y) {
    return x.appendChild(y)
  }
}

export default Anchorage