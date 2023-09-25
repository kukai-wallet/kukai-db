import { useState } from "react"
import { Inbox } from "./Inbox"
import { LeftPanel } from "./LeftPanel"
import { RightPanel } from "./RightPanel"
import { Sent } from "./Sent"
import { Compose } from "./Compose"

export enum SIDE_OPTIONS {
    COMPOSE = 'Compose',
    INBOX = 'Inbox',
    SENT = 'Sent'
}

export const PANELS = {
    [SIDE_OPTIONS.COMPOSE]: Compose,
    [SIDE_OPTIONS.INBOX]: Inbox,
    [SIDE_OPTIONS.SENT]: Sent,
}

export function UserPanel() {
    const [panel, setPanel] = useState(SIDE_OPTIONS.COMPOSE)

    return (
        <div className="flex">
            <LeftPanel panel={panel} setPanel={setPanel} />
            <RightPanel panel={panel} />
        </div>
    )
}

