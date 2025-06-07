import NavComponent from '@/components/main/nav.component'
import { Outlet } from 'react-router-dom';

export default function DashbardLayout ()
{
    return (
        <main className='h-full grid grid-rows-12 md:grid-rows-1 md:grid-cols-12'>
            <NavComponent />
            <Outlet />
        </main>
    );
}
