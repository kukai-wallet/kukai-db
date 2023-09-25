import { useEffect } from "react";
import { useStore } from "../store/store";
import { APP_STATE } from "../types/types";

export function useWallet() {
    const kukaiEmbed = useStore(store => store.kukaiEmbed)
    const setAppState = useStore(store => store.setAppState)

    useEffect(() => {
        console.log('run::')
        if (!kukaiEmbed.initialized) {
            kukaiEmbed.init().then(() => setAppState(APP_STATE.READY))
        }
    }, [kukaiEmbed, setAppState])
}