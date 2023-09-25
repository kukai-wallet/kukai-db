import { KukaiEmbed, Networks } from 'kukai-embed'
import { create } from 'zustand'
import { APP_STATE, User } from '../types/types'

export interface Store {
    appState: APP_STATE
    kukaiEmbed: KukaiEmbed
    user: User | undefined

    setAppState(value: APP_STATE): void
}

const KUKAI_EMBED = new KukaiEmbed({ net: Networks.ghostnet, icon: false, enableLogging: true })

export const useStore = create<Store>()((set, get) => {
    return {
        appState: APP_STATE.LOADING,
        kukaiEmbed: KUKAI_EMBED,
        user: undefined,

        setAppState: (value: APP_STATE) => {
            set(() => ({ appState: value }))
        },
        setUser: (user: User | undefined) => {
            set(() => ({ user }))
        },
    }
})