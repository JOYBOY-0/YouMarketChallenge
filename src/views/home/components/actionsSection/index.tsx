import { ArrowsRightLeftIcon, BanknotesIcon, Cog6ToothIcon, GiftIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface ActionItemProps {
    title: string
    icon: React.ReactNode
    to: string
}

const ActionItem : FC<ActionItemProps> = ({ title, icon, to }) => {
    return (
        <Link to={to} className='flex flex-col items-center justify-center rounded-lg w-32 gap-2'>
            {icon}
            <p className='text-xs text-orange-500 text-center whitespace-nowrap'>{title}</p>
        </Link>
    )
}

export const ActionsSection = () => {
    let iconStyle='h-12 w-12 text-orange-400'
    let actions = [
        {
            title: 'Cargar saldo',
            icon: <BanknotesIcon className={iconStyle} />,
            to: '/add'
        },
        {
            title: 'Enviar premio',
            icon: <GiftIcon className={iconStyle} />,
            to: '/'
        },
        {
            title: 'Movimientos',
            icon: <ArrowsRightLeftIcon className={iconStyle} />,
            to: '/'
        },
        {
            title: 'Ajustes',
            icon: <Cog6ToothIcon className={iconStyle} />,
            to: '/'
        }
    ]

  return (
    <section className='mt-6 mb-10 flex flex-col w-full'>
        <h2 className='text-xl text-gray-800 font-bold'>Acciones</h2>
        <div className='flex items-start gap-2 my-4'>
            {actions.map((action, index) => (
                <ActionItem key={index} title={action.title} icon={action.icon} to={action.to} />
            ))}
        </div>
    </section>
  )
}
