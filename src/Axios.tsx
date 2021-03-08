import {log} from "util";

const axios = require('axios')

const URL = {
  posts: 'https://jsonplaceholder.typicode.com/posts',
  todos: 'https://jsonplaceholder.typicode.com/todos'
}

export default ():JSX.Element => {
  // axios.get(URL.posts)
  //   .then((resp: object) => console.log(resp))

  // axios.delete(`${URL.posts}/1`)
  //   .then((resp: object) => console.log(resp))

  // axios.head(URL.posts)
  //   .then((resp: object) => console.log(resp))

  // axios.request()
  //   .then((resp: any) => console.log(resp))

  const instanceOfAxios = axios.create({
    baseURL: URL.posts,
  })

  instanceOfAxios.defaults.baseURL = URL.todos
  const myInterceptor = instanceOfAxios.interceptors.request.use(() => {
    console.log('Data sent')
  })
  instanceOfAxios.interceptors.request.eject(myInterceptor)

  instanceOfAxios().then((resp: any) => {
    console.log(resp)
  })

  return(
    <></>
  )
}
