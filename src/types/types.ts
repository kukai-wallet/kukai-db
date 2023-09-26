export enum APP_STATE {
    LOADING,
    READY
}

export interface User {
    pk: string;
    pkh: string;
    userData: Record<string, any>
}

export interface Message {
    fromAddress: string
    id: string
    isRead: boolean
    message: string
    timestamp: string
    title: string
    toAddress: string
}