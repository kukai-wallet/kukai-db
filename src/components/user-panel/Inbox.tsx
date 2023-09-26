import { MouseEvent } from "react"
import { useStore } from "../../store/store"
import { formatAddress } from "../../utils/text-utils"
import { doc, getFirestore, updateDoc } from "firebase/firestore"

export function Inbox() {
    const inbox = useStore(store => store.inbox)

    async function markRead(e: MouseEvent<HTMLButtonElement>) {
        const { id } = e.currentTarget.dataset
        const db = getFirestore()

        updateDoc(doc(db, 'messages', id!), { isRead: true }).catch(console.warn)
    }

    const messages = inbox.map(({ title, message, fromAddress, isRead, id }) => {
        return (
            <div key={id} className="py-2 px-3 bg-slate-50 rounded-xl">
                <span className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-600 text-[15px] leading-0">{title}</h3>
                    {!isRead && <button data-id={id} onClick={markRead} className="text-[11px] px-1 py-[1px] tracking-[0.5px] text-slate-500 font-semibold rounded-md border-solid border-slate-200 border-2 hover:bg-slate-100">MARK READ</button>}
                </span>
                <p className="text-sm leading-6 font-medium text-slate-500">{message}</p>
                <div className="flex text-xs mt-2 font-semibold text-slate-300 justify-start">
                    <span>by &nbsp;<b>{formatAddress(fromAddress)}</b></span>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col h-full">
            <h1 className="font-bold h-[80px] text-xl text-slate-800 leading-[40px]">Inbox</h1>
            <div className="flex flex-col h-[312px] rounded-xl gap-4 overflow-scroll">
                {messages}
            </div>
        </div>
    )
}