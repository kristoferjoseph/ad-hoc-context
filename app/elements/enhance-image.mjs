export default function EnhanceImage({ html, state }) {
  const { attrs={}, store={} } = state
  const src = attrs.src || ''
  const alt = attrs.alt || ''
  const context = {
    source: src
  }
  store.context = context

  return html`
<picture>
  <slot></slot>
  <img src="${src}" alt="${alt}">
</picture>
  `
}
