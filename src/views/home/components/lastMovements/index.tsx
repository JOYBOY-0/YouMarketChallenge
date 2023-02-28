import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

interface LastMovementItemProps {
    title: string
    amount: number
    date: string
}

const LastMovementItem = ({ title, amount, date }: LastMovementItemProps) => {
    let isPositive = amount > 0;
    let dateFormatted = new Date(date).toLocaleDateString();
    let priceFormatted = amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })

    return (
        <div className='flex items-center justify-start gap-1 w-full p-2'>
            <div className='p-1 rounded-md bg-gray-200'>
                {isPositive ?
                <ArrowUpCircleIcon className='h-8 w-8 text-green-400' /> :
                <ArrowUpCircleIcon className='h-8 w-8 text-red-400' />}
            </div>
            <p className='text-lg text-gray-600 ml-1 mr-auto'>{title}</p>
            <div className='flex flex-col items-end'>
                <p className='text-lg text-gray-900 font-bold'>{priceFormatted}</p>
                <p className='text-sm text-gray-400'>{dateFormatted}</p>
            </div>
        </div>
    )
}

export const LastMovements = () => {
    let movements = [
        {
            title: 'Carga de saldo',
            amount: 10000,
            date: '2021-10-10'
        },
        {
            title: 'Envio de premio',
            amount: -2500,
            date: '2021-10-10'
        },
        {
            title: 'Envio de premio',
            amount: -2500,
            date: '2021-10-10'
        },
        {
            title: 'Envio de premio',
            amount: -2500,
            date: '2021-10-10'
        },
        {
            title: 'Carga de saldo',
            amount: 7500,
            date: '2021-10-10'
        }
    ]
  return (
    <section className='my-6 flex flex-col w-full'>
        <h2 className='text-xl text-gray-800 font-bold'>Movimientos</h2>
        <div className='flex flex-col w-full items-start gap-2 my-4 divide-y'>
            {movements.map((movement, index) => (
                <LastMovementItem key={index} title={movement.title} amount={movement.amount} date={movement.date} />
            ))}
        </div>
    </section>
  )
}
