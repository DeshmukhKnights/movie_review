import { createContext, useContext, useEffect, useState } from 'react';
import { getUserFromLocalCookie } from './auth';

interface UserContextType {
    user: any;
    loading: boolean;
}

export const User = createContext<UserContextType>({ user: null, loading: false });

export const UserProvider = ({ value, children }: { value: { user: any, loading: boolean }, children: React.ReactNode }) => {
    return <User.Provider value={value}>{children}</User.Provider>
};

export const useUser = () => useContext(User);

export const useFetchUser = () => {
    const [userState, setUserState] = useState<any>(undefined);

    const [data, setData] = useState<UserContextType>({
        user: userState || null,
        loading: userState === undefined,
    });

    useEffect(() => {
        if (userState !== undefined) {
            return;
        }

        let isMounted = true;
        const resolveUser = async () => {
            const user = await getUserFromLocalCookie();
            if (isMounted) {
                setUserState(user);
                setData({ user, loading: false });
            }
        };
        resolveUser();

        return () => {
            isMounted = false;
        };
    }, []);

    return data;
};
