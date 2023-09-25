import { formatAddress } from "../../utils/text-utils"

const SAMPLE_MESSAGES = [
    {
        by: 'tz2XdZQhhoCr5tWD1rP6v7PyQ9HUhBfw2EWE',
        description: 'Hey, did you know that ants do not have ears?',
        id: 'abc',
        isRead: false,
        title: 'My first message',
    },
    {
        by: 'tz2XdZQhhoCr5tWD1rP6v7PyQ9HUhBfw2xtz',
        description: 'Did you know that ants can become zombies? Testing a second line here.',
        id: 'def',
        isRead: true,
        title: 'Ants can become zombies',
    },
    {
        by: 'tz2XdZQhhoCr5tWD1rP6v7PyQ9HUhBfw2EWE',
        description: 'Hey, did you know that ants do not have ears?',
        id: 'hij',
        isRead: false,
        title: 'My first message',
    },
    {
        by: 'tz2XdZQhhoCr5tWD1rP6v7PyQ9HUhBfw2xtz',
        description: 'Did you know that ants can become zombies?',
        id: 'klm',
        isRead: true,
        title: 'Ants can become zombies',
    },
    {
        by: 'tz2XdZQhhoCr5tWD1rP6v7PyQ9HUhBfw2EWE',
        description: 'Hey, did you know that ants do not have ears?',
        id: 'nop',
        isRead: false,
        title: 'My first message',
    },
    {
        by: 'tz2XdZQhhoCr5tWD1rP6v7PyQ9HUhBfw2xtz',
        description: 'Did you know that ants can become zombies?',
        id: 'qrs',
        isRead: true,
        title: 'Ants can become zombies',
    },
]

export function Inbox() {

    const messages = SAMPLE_MESSAGES.map(({ title, description, by, id }) => {
        return (
            <div key={id} className="py-2 px-3 bg-slate-50 rounded-xl">
                <h3 className="font-bold text-slate-600 text-[15px] leading-0">{title}</h3>
                <p className="text-sm leading-6 font-medium text-slate-500">{description}</p>
                <div className="flex text-xs mt-2 font-semibold text-slate-300 justify-start">
                    <span>by &nbsp;<b>{formatAddress(by)}</b></span>
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