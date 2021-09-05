import axios from 'axios'

const $host = axios.create({
  baseURL: 'http://localhost:5000'
})

const getData = async () => {
  const {data} = await $host.get('/')
  return data
}

const getResult = async (response) => {
  const {data} = await $host.post('/', response)
  return data
}

export {
  getData,
  getResult
}