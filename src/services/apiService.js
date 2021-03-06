import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

export const Register = (name, email, password) => {
  return axios
    .post('/auth/register', {
      name: name,
      mail: email,
      password: password,
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const Login = (email, password) => {
  return axios
    .post(
      '/auth/login',
      {
        mail: email,
        password: password,
      },
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const AddNewPdf = (userToken, pdf) => {
  // prettier-ignore
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${userToken[0]}`
  }
  const formData = new FormData()
  formData.append('file', pdf)

  return axios
    .post('/api/diapo', formData, {
      headers: headers,
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export const GetAllDiapoForUser = (userToken) => {
  // prettier-ignore
  const headers = {
    'Authorization': `Bearer ${userToken[0]}`
  }

  return axios
    .get('/api/diapo', {
      headers: headers,
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err
    })
}

export const GetDiapoById = (diapoId) => {
  return axios
    .get('/diapo/' + diapoId)
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err
    })
}

export const DeleteDiapoById = (userToken, diapoId) => {
  // prettier-ignore
  const headers = {
    'Authorization': `Bearer ${userToken[0]}`
  }

  return axios
    .delete('/api/diapo/' + diapoId, {
      headers: headers,
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return err
    })
}
