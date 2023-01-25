export default function EnhanceImageVariant({ state }) {
  const { attrs={}, store={} } = state
  const { alt,  media='', width } = attrs
  const { context } = store
  const { source } = context
  const srcset = `/transform${source}?width=${width}`
  const mediaAttr = media
    ? `media="${media}"`
    : ''

  return `
<source srcset="${srcset}" ${mediaAttr} />
  `
}
