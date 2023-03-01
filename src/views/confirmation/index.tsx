import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button'
import Layout from '../../layout'
import ConfirmationCodeInput from './components/codeInput';
import './styles.css'

export const Confirmation = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const handleConfirmation = (code: string) => {
    let mockupCode = '123456'
    console.log(`Confirmed code: ${code}`);
    if (code === mockupCode) {
      navigate('/home')
    } else {
      setError(true)
    }
  };

  return (
    <Layout prevRoute='/' title='Confirmación'>
      <div className='flex flex-col items-center justify-center flex-1'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-gray-800'>Te acabamos de enviar un correo a </p>
          <p className='text-xl font-bold mb-6'>test@test.com.ar</p>
          <p className='text-gray-800'>Ingresa el código de 6 dígitos recibido:</p>
        </div>
        <div className='flex flex-col py-8'>
          <ConfirmationCodeInput onConfirm={handleConfirmation} />
          {error && <p className='text-red-400 text-center mt-2 text-sm'>Código incorrecto (es: 123456)</p>}
        </div>
        <Button disabled >Reenviar</Button>
      </div>
    </Layout>
  )
}
