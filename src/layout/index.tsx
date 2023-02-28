import React, { FC } from 'react'
import Navigation from '../components/navigation';

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
    prevRoute?: string;
}

const Layout: FC<LayoutProps> = ({ title, prevRoute, children }) => {
    return (
        <>
            <Navigation title={title} prevRoute={prevRoute} />
            <main className='flex flex-col flex-1 min-h-[100vh]'>
                {children}
            </main>
        </>
    );
}

export default Layout
