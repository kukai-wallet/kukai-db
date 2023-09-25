import { PANELS, SIDE_OPTIONS } from "./UserPanel"

interface Props {
    panel: SIDE_OPTIONS
}
export function RightPanel({ panel }: Props) {
    const Panel = PANELS[panel]

    return (
        <div className="flex-col w-[400px] p-6">
            <Panel />
        </div>
    )
}