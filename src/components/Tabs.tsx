import { memo, type ReactNode } from "react";

interface Tab {
  title: string,
  content: ReactNode
}

interface TabsProps {
  tabs: Array<Tab>,
}

const Tabs = memo(({ tabs }: TabsProps) => {
  return (
    <div className="tabs">
    </div>
  )
})

export default Tabs