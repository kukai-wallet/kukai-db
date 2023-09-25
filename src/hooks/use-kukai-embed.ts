import { useEffect } from "react";
import { useStore } from "../store/store";
import { APP_STATE } from "../types/types";

export function useWallet() {
    const kukaiEmbed = useStore(store => store.kukaiEmbed)
    const setAppState = useStore(store => store.setAppState)
    const setUser = useStore(store => store.setUser)

    useEffect(() => {
        if (!kukaiEmbed.initialized) {
            kukaiEmbed.init().then(() => {
                const user = kukaiEmbed.user

                if (user) {
                    setUser(user)
                }
                setAppState(APP_STATE.READY)
            })
        }
    }, [kukaiEmbed, setAppState, setUser])
}