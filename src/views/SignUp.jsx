import { useState } from 'react'

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)

  // const signUp = ({ email, password, pseudo }) => {
  //   signup(email, password, pseudo)
  //     .then(() => {
  //       router.push('/')
  //     })
  //     .catch((error) => {
  //       toast({
  //         title: 'An error occurred.',
  //         description: error.message,
  //         status: 'error',
  //         duration: 7000,
  //         isClosable: true,
  //       })
  //     })
  // }

  const validatePseudo = (value) => {
    let error
    if (!value) error = 'Champ requis'
    else if (value.length > 12) error = '12 caractère maximum'
    else if (value.length < 3) error = '3 caractères minimum'
    else if (/[^a-zA-Z0-9]/.test(value)) error = 'Pas de caractère spéciaux'

    return error
  }
  const validateEmail = (value) => {
    let error
    if (!value) error = 'Champ requis'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      error = 'Format email invalide'
    return error
  }
  const validatePassword = (value) => {
    let error = ''
    if (!value) error = 'Champ requis'
    else if (value.length < 8) error = '8 caractères minimum'
    else if (!/(?=.*[0-9])/.test(value)) error = 'Doit contenir un nombre'

    return error
  }
  const validateConfirmPassword = (pass, value) => {
    let error = ''
    if (!value) error = 'Champ requis'
    else if (pass && value && pass !== value)
      error = 'Les mots de passe de correspondent pas'

    return error
  }
  return <h2>SignUp</h2>
}
