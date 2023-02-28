import React, { FC } from 'react'
import Navigation from '../components/navigation';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    prevRoute?: string;
}

const Layout: FC<LayoutProps> = ({ title, prevRoute, children }) => {
    return (
        <div className='flex min-h-screen justify-center'>
            <Navigation title={title} prevRoute={prevRoute} />
            <main className='w-full mt-16 flex flex-col max-w-md flex-1 bg-gray-100'>
                {children}
            </main>
        </div>
    );
}

export default Layout
