import { KukaiEmbed, Networks } from 'kukai-embed'
import { create } from 'zustand'
import { APP_STATE, Message, User } from '../types/types'

export interface Store {
    appState: APP_STATE
    inbox: Message[]
    kukaiEmbed: KukaiEmbed
    sent: Message[]
    user: User | undefined

    addMessage(value: Message): void
    setAppState(value: APP_STATE): void
    setMessages(value: Message[]): void
    setUser(value: User | undefined): void
}

const KUKAI_EMBED = new KukaiEmbed({ net: Networks.ghostnet, icon: false, enableLogging: true })

function sortByDate(a: Pick<Message, 'timestamp'>, b: Pick<Message, 'timestamp'>) {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
}

export const useStore = create<Store>()((set, get) => {
    return {
        appState: APP_STATE.LOADING,
        inbox: [],
        kukaiEmbed: KUKAI_EMBED,
        sent: [],
        user: undefined,

        addMessage: (value: Message) => {
            const userAddress = get().user!.pkh

            const key = value.fromAddress === userAddress ? 'sent' : 'inbox'
            const bucket = get()[key]
            bucket.push(value)

            set(() => ({ [key]: [...bucket].sort(sortByDate) }))
        },
        setAppState: (value: APP_STATE) => {
            set(() => ({ appState: value }))
        },
        setUser: (user: User | undefined) => {
            set(() => ({ user }))
        },
        setMessages: (value: Message[]) => {
            const userAddress = get().user!.pkh

            const newInbox: Message[] = []
            const newSent: Message[] = []

            value.forEach(message => {
                const bucket = message.fromAddress === userAddress ? newSent : newInbox
                bucket.push(message)
            })

            set(() => ({ sent: newSent.sort(sortByDate), inbox: newInbox.sort(sortByDate) }))
        },
    }
})