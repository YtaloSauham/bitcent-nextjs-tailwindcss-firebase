import Users from "@/logic/core/users/User";

import { Auth, GoogleAuthProvider, User, getAuth, onIdTokenChanged, signInWithPopup, signOut } from "firebase/auth"
import { userInfo } from "os";
import { app } from "../config/app";


export type ObserverUser = (user: Users | null) => void

export type CancelObserver = () => void

export default class Authentication {




    private _auth: Auth

    constructor() {
        this._auth = getAuth(app)
    }


    async loginGoogle(): Promise<Users | null> {

        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider())
        return this.convertToUser(resp.user)

    }



    async logout(): Promise<void> {

        await signOut(this._auth)


    }


    observer(notification: ObserverUser): CancelObserver {
        return onIdTokenChanged(this._auth, async (User) => {
            const user = this.convertToUser(User)
            notification(user)
        })
    }


    private convertToUser(userFirabase: User | null): Users | null {

        if (!userFirabase?.email) return null

        const nameAlternate = userFirabase.email!.split('@')[0]

        return {
            id: userFirabase.uid,
            name: userFirabase.displayName ?? nameAlternate,
            email: userFirabase.email,
        }


    }



}