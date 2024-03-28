import { useState } from "react";

export default function Tabs({ tabsContent , onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleClick(currentIndex) {
    setCurrentTabIndex(currentIndex);
    onChange(currentIndex);
  }


  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div className={`tab-item ${currentTabIndex === index ? 'active' : ""}`} 
               onClick={() => handleClick(index)}
               key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
        <div className="content">
            <h1>{tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}</h1>
        </div>
      </div>
    </div>
  );
}
