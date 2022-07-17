import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

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

export const UpdateUserProfile = (userToken, name, mail, picture, password) => {
  console.log(userToken)
  // prettier-ignore
  const headers = {
    //'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${userToken}`
  }
  const formData = new FormData()
  formData.append('picture', picture)

  return axios
    .put(
      '/api/user/profile',
      //formData,
      {
        name: name,
        mail: mail,
        password: password,
      },
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
  return axios
    .delete('/api/user', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      data: {
        userId: idUser,
      },
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
  return axios
    .get('/delete-cookie', {})
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}
