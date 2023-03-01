import { ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useUserContext } from '../../../../context/userContext'

export const HeroCard = () => {
  let { user } = useUserContext();
  let balance = user.balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  
  return (
    <div className='rounded-lg p-4 bg-white flex flex-col gap-4 shadow'>
        <div className='flex flex-col items-start justify-center gap-1'>
          <p className='text-sm text-gray-400'>Mi saldo</p>
          <p className='text-3xl text-gray-900 font-bold'>{balance}</p>
          </div>
          <div className='flex flex-col items-start justify-center gap-1'>
          <p className='text-sm text-gray-400'>Acciones</p>
          <div className='flex items-center justify-between w-full'>
              <p className='text-xl text-gray-800 font-bold'>Seleccione una accion</p>
              <ChevronDownIcon className=' ml-4 h-6 w-6 text-gray-800' />
          </div>
        </div>
    </div>
  )
}
