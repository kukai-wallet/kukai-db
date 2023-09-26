import { useStore } from "../../store/store"
import { formatAddress } from "../../utils/text-utils"

export function Inbox() {
    const inbox = useStore(store => store.inbox)

    const messages = inbox.map(({ title, message, fromAddress, id }) => {
        return (
            <div key={id} className="py-2 px-3 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-slate-600 text-[15px] leading-0">{title}</h3>
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