import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import Layout from '../../layout'
import './styles.css'

export const Auth = () => {
  const navigate = useNavigate()
  const [field, setField] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateField()) {
      navigate('/confirmation')
    } else {
      console.log('Invalid')
    }
  }

  const validateField = () => {
    if (field.length >= 6) {
      return true
    }
    return false
  }


  return (
    <Layout title='Auth'>
      <form
      onSubmit={handleSubmit} 
      className='flex flex-col items-center justify-center flex-1'>
        <input 
        onChange={(e) => setField(e.target.value)}
        placeholder='CUIT o Correo Electrónico'
        className='auth-input' value={field}></input>
        <Button disabled={field.length <= 6} >Iniciar sesión</Button>
        <p className=' text-gray-400 mt-8'>Aún no tengo cuenta</p>
      </form>
    </Layout>
  )
}
