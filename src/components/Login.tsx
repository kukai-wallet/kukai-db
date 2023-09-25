import { SpinnerIcon } from "../icons/Icons"
import { useStore } from "../store/store"
import { APP_STATE } from "../types/types"

export function Login() {
    const kukaiEmbed = useStore(store => store.kukaiEmbed)
    const appState = useStore(store => store.appState)
    const setUser = useStore(store => store.setUser)

    const isLoading = appState === APP_STATE.LOADING

    async function handleClick() {
        try {
            const user = await kukaiEmbed.login()
            setUser(user)
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <div className="p-6">
            <h1 className="font-bold text-gray-400 text-sm tracking-[1px]">Welcome</h1>

            <div className="flex items-center justify-center my-14">
                <button
                    disabled={isLoading}
                    onClick={handleClick} className="rounded-md flex items-center justify-center bg-indigo-600 w-[144px] h-[40px] text-sm font-semibold text-white shadow-sm enabled:hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40">
                    {isLoading ? <SpinnerIcon /> : 'Log in with social'}
                </button>
            </div>
        </div>
    )
}