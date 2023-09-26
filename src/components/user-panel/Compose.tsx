import { addDoc, collection, getFirestore } from "firebase/firestore"
import { FormEvent, useState } from "react"
import { useStore } from "../../store/store"
import { Message } from "../../types/types"

export function Compose() {
    const user = useStore(store => store.user)
    const [canSubmit, setCanSubmit] = useState(false)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const { message, title, to } = e.currentTarget.elements as any
        const db = getFirestore()

        const newMessage: Omit<Message, 'id'> = {
            message: message.value,
            title: title.value,
            toAddress: to.value,
            fromAddress: user!.pkh,
            isRead: false,
            timestamp: new Date().toISOString()
        }

        try {
            await addDoc(collection(db, 'messages'), newMessage)
            console.log('db::write')

            to.value = ''
            message.value = ''
            title.value = ''
        } catch (error: any) {
            console.warn(error)
        }

    }

    return (
        <div className="flex flex-col h-full">
            <h1 className="font-bold h-[80px] text-xl text-slate-800 leading-[40px]">New Message</h1>

            <form className="flex flex-col justify-between h-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-4 text-slate-500">
                            To
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="to"
                                    id="to"
                                    autoComplete="username"
                                    className="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="tezos address"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="username" className="block text-sm font-medium leading-4 text-slate-500">
                            Title
                        </label>
                        <div className="mt-2">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Your title"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="about" className="block text-sm font-medium leading-4 text-slate-500">
                            Message
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={2}
                                className="block w-full resize-none font-inherit rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}