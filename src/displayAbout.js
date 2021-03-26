const Display = (function() {
  function getAboutPage() {
    return true
  }
  return { getAboutPage }
})()

const getAboutPage = Display.getAboutPage

export { getAboutPage }