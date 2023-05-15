import User from "@/logic/core/users/User"
import AuthenticationFirebase from "@/logic/firebase/auth/Authentication"
import { createContext, useEffect, useState } from "react"

interface Authentication {
    loading: boolean
    user: User | null
    loginGoogle: () => Promise<User | null>
    logout: () => Promise<void>
}



const AuthenticationContext = createContext<Authentication>({
    loading: true,
    user: null,
    loginGoogle: async () => null,
    logout: async () => { },
})


export default AuthenticationContext

export function AuthenticationProvider(props: any) {

    const [loading, setLoading] = useState<boolean>(true)

    const [user, setUser] = useState<User | null>(null)

    const authentication = new AuthenticationFirebase()

    useEffect(() => {
        const cancel = authentication.observer(function (user) {
            setUser(user)
            setLoading(false)
        })
        return () => cancel()

    }, [])

    async function loginGoogle(): Promise<User | null> {
        const user = await authentication.loginGoogle()
        setUser(user)
        return user

    }

    async function logout(): Promise<void> {
        await authentication.logout()
        setUser(null)

    }

    return (
        <AuthenticationContext.Provider value={{
            loading,
            user,
            loginGoogle,
            logout,

        }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}