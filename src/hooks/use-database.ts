import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { collection, getFirestore, onSnapshot, or, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { FIREBASE_CONFIG } from "../constants/config";
import { useStore } from "../store/store";
import { Message } from "../types/types";

export function useDatabase() {
    const user = useStore(store => store.user)
    const addMessage = useStore(store => store.addMessage)
    const setMessages = useStore(store => store.setMessages)

    useEffect(() => {
        const app = initializeApp(FIREBASE_CONFIG);
        const auth = getAuth(app)

        signInAnonymously(auth)
            .then(() => console.log('db::connected'))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        if (!user) {
            return
        }
        const db = getFirestore()

        const userAddress = user.pkh
        console.log('listening for::', userAddress)

        const q = query(collection(db, "messages"), or(where("fromAddress", "==", userAddress), where("toAddress", "==", userAddress)))

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages: Message[] = []

            querySnapshot.forEach((doc) => {
                console.log('received::', doc.id)
                messages.push({ ...doc.data(), id: doc.id } as Message)
            })

            setMessages(messages)
        })

        return () => {
            unsubscribe()
        }
    }, [user, addMessage, setMessages])

}