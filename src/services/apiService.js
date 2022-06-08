import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'

export const Register = (name, email, password) => {
  console.log(name, email, password)
  return axios
    .post('/auth/register', {
      name: name,
      mail: email,
      password: password,
    })
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

export const Login = (email, password) => {
  return axios
    .post('/auth/login', {
      mail: email,
      password: password,
    })
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}
