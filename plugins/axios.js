export default function ({$axios, store, redirect}) {
  console.log('AXIOS PLUGIN LOADED');
  let TOKEN
  if (process.browser) {
    TOKEN = localStorage.getItem('TOKEN')
  }
  $axios.setBaseURL('http://167.99.46.201/api')
  $axios.onRequest(config => {
    if (TOKEN) {
      config.headers.common['Authorization'] = `Bearer ${TOKEN}`
    }
  })
}
