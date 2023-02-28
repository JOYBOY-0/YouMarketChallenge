import React, { FC } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

interface NavigationProps {
    title?: string;
    prevRoute?: string;
}

const Navigation: FC<NavigationProps> = ({ title = '', prevRoute }) => {
    return (
        <div className='fixed top-0 h-16 w-screen bg-emerald-500 flex items-center justify-center'>
            {prevRoute !== undefined &&
                <Link className='absolute left-2' to={prevRoute}>
                    <ChevronLeftIcon className='h-8 w-8 text-white' />
                </Link>
            }
            <p className='font-medium text-white'>{title}</p>
        </div>
    );
}

export default Navigation
