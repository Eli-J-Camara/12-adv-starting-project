import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    const navigation = useNavigation();

    return (
        <>
            <MainNavigation />
            {/* This loading is different than useState or useEffect state as it 
            renders the loading symbole on the parrent component rather than the 
            component being traveled to. */}
            <main>
                <Outlet />
                {navigation.state === 'loading' && <p>Loading...</p>}
            </main>
        </>
    )
};

export default RootLayout;