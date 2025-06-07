import NavComponent from '@/components/main/nav.component'

export default function DashbardLayout ({ children })
{
    return (
        <main>
            <NavComponent />
            { children }
        </main>
    );
}
