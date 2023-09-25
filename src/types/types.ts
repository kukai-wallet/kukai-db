export enum APP_STATE {
    LOADING,
    READY
}

export interface User {
    pk: string;
    pkh: string;
    userData: Record<string, any>
}