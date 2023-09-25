
import { Login } from "./components/Login"
import { UserPanel } from "./components/user-panel/UserPanel"
import { useWallet } from "./hooks/use-kukai-embed"
import { useStore } from "./store/store"

export default function App() {
  const user = useStore(store => store.user)
  useWallet()

  const hasUser = Boolean(user)

  return (
    <div className="flex items-center justify-center bg-slate-50 h-screen">
      <div className="bg-white rounded-xl min-w-[340px] shadow-[0_16px_42px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
        {hasUser ? <UserPanel /> : <Login />}
      </div>
    </div>
  )
}
