import { useState } from "react"
import { Inbox } from "./Inbox"
import { LeftPanel } from "./LeftPanel"
import { RightPanel } from "./RightPanel"
import { Sent } from "./Sent"

export enum SIDE_OPTIONS {
    INBOX = 'inbox',
    SENT = 'sent'
}

export const PANELS = {
    [SIDE_OPTIONS.INBOX]: Inbox,
    [SIDE_OPTIONS.SENT]: Sent,
}

export function UserPanel() {
    const [panel, setPanel] = useState(SIDE_OPTIONS.INBOX)

    return (
        <div className="flex">
            <LeftPanel panel={panel} setPanel={setPanel} />
            <RightPanel panel={panel} />
        </div>
    )
}

