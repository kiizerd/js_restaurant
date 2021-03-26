const Display = (function() {
  function getMenuPage() {
    return true
  }
  return { getMenuPage }
})()

const getMenuPage = Display.getMenuPage

export { getMenuPage }