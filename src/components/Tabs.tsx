import { memo, useState, type ReactNode } from "react";

import "../styles/components/tabs.css"

interface TabsProps {
  children: Array< ReactNode>,
  titles: Array<string>,
  initialTabIndex?: number
}

const Tabs = memo(({ children, titles, initialTabIndex = 0 }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(initialTabIndex)

  return (
    <div className="tabs">
      <ul className="tabs_titles">
        {titles.map((title, index) =>
          <li className={`
              tabs_title ${index == currentTabIndex ? "selected" : ""}
            `} onClick={() => setCurrentTabIndex(index)}>
            {title}
          </li>
        )}
      </ul>
      <div className="tabs_content">
        {children[currentTabIndex]}
      </div>
    </div>
  )
})

export default Tabs