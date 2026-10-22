// fallback hvis vi ikke kan få en position (København)
const fallback = { lat: 55.6761, long: 12.5683 }

export function getPosition() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser")
      return resolve(fallback)
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve({ lat: position.coords.latitude, long: position.coords.longitude }),
      () => {
        console.log("no pos error")
        resolve(fallback)
      }
    )
  })
}
