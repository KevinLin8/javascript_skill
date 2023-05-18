onmessage = (event) => {
  console.log(`Message received in worker: ${event.data}`)
  postMessage('Hello, main!')
}
