import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'

export const GetUserProfile = (userToken) => {
  // prettier-ignore
  const headers = {
    'Authorization': `Bearer ${userToken[0]}`
  }
  return axios
    .get('/api/user', {
      headers: headers,
    })
    .then((res) => {
      console.log(res)
      return res.data
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

export const UpdateUserProfile = (userToken, data) => {
  console.log(userToken)
  // prettier-ignore
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${userToken}`
  }

  return axios
    .put(
      '/api/user/profile',
      { data },
      {
        headers: headers,
      },
    )
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

export const DeleteUserProfile = (userToken, idUser) => {
  // prettier-ignore
  const headers = {
    'Authorization': `Bearer ${userToken[0]}`
  }

  return axios
    .delete('/api/user/profile', {
      headers: headers,
      _id: idUser,
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

export const DeleteCookie = () => {
  return axios.get('/delete-cookie')
}
