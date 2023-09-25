import { Dispatch, MouseEvent, SetStateAction } from "react"
import { useStore } from "../../store/store"
import { formatAddress } from "../../utils/text-utils"
import { SIDE_OPTIONS } from "./UserPanel"
import { LogoutIcon } from "../../icons/Icons"

interface Props {
    panel: string
    setPanel: Dispatch<SetStateAction<SIDE_OPTIONS>>
}

export function LeftPanel({ panel, setPanel }: Props) {
    const user = useStore(store => store.user)!
    const kukaiEmbed = useStore(store => store.kukaiEmbed)
    const setUser = useStore(store => store.setUser)
    const addressInitials = user.pkh.substring(0, 3)

    function handleClick(e: MouseEvent<HTMLLIElement>) {
        const { option } = e.currentTarget.dataset
        setPanel(option as SIDE_OPTIONS)
    }

    const options = Object.values(SIDE_OPTIONS).map((option, index) => {
        const isEnabled = option === panel
        const isUnread = option === SIDE_OPTIONS.INBOX

        return (
            <li
                key={index}
                data-option={option}
                aria-current={isEnabled}
                className="flex items-center p-3 text-sm text-slate-400 font-semibold cursor-pointer aria-[current=true]:text-slate-700 aria-[current=true]:font-extrabold aria-[current=true]:bg-indigo-600 aria-[current=true]:text-white bg-slate-100 h-[40px] rounded-lg"
                onClick={handleClick}>
                {option}
                {isUnread && <div className="bg-pink-500 w-[6px] h-[6px] rounded-full translate-x-1 translate-y-[-4px]" />}
            </li>
        )
    })

    async function handleExit() {
        await kukaiEmbed.logout()
        setUser(undefined)
    }

    return (
        <div className="flex flex-col items-center justify-between bg-slate-50 gap-2 pt-6 w-[140px] h-[440px]">
            <div className="flex flex-col items-center gap-2 justify-center">
                <div className="flex items-center text-xs font-bold justify-center text-slate-500 tracking-[1px] rounded-full bg-slate-100 w-12 h-12">{addressInitials}</div>
                <div className="text-xs text-slate-500 font-semibold">
                    {formatAddress(user.pkh)}
                </div>
            </div>

            <div className="w-full h-full p-6 mt-6">
                <ul className="flex flex-col gap-2">
                    {options}
                </ul>
            </div>

            <div className="w-full px-6">
                <button onClick={handleExit} className="flex items-center justify-center leading-none line gap-2 border-solid border-2 text-sm border-slate-200 h-[40px] w-full rounded-md mb-6 text-slate-600 font-semibold hover:bg-slate-100">
                    <LogoutIcon /> Exit
                </button>
            </div>
        </div>
    )
}
