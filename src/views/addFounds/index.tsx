import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import { useUserContext } from '../../context/userContext'
import Layout from '../../layout'
import './styles.css'

export const AddFounds = () => {
    let navigate = useNavigate()
    let { addFounds } = useUserContext()
    let [value, setValue] = useState<number | ''>('')

    const handleSubmit = () => {
        if (value === null) return;
        addFounds(value as number)
        navigate('/home')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value);
        console.log(value)
        if (typeof value !== 'number' || isNaN(value)) return;

        setValue(parseInt(e.target.value))
    }

    return (
    <Layout prevRoute='/home' title='Añadir fondos'>
        <div className='flex flex-col items-center justify-center flex-1'>
            <div className='flex flex-col items-center px-4'>
                <h1 className='text-xl text-gray-400 text-left w-full mb-10'>Añadir fondos</h1>
                <div className='relative mb-8 '>
                    <input 
                    placeholder='0'
                    className='founds-input'
                    value={value}
                    onChange={handleChange} 
                    type='text' />
                    <span className='text-4xl absolute left-0 top-1/2 -translate-y-1/2 text-gray-400'>$</span>
                </div>
                <Button onClick={handleSubmit} >Añadir</Button>
            </div>
        </div>
    </Layout>
    )
}
