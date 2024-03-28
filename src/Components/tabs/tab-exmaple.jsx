import Tabs from "./tabs";
import "./tabs.css";

export default function TabExmaple() {
  const tabs = [
    {
      label: "Tab one",
      content: "This is the content for Tab one",
    },
    {
      label: "Tab two",
      content: "This is the content for Tab two",
    },
    {
      label: "Tab Three",
      content: "This is the content for Tab Three",
    },
  ];

  function handleClick(indexTab){
    console.log(indexTab)
  }
  console.log(tabs);
  return <Tabs tabsContent={tabs} onChange={handleClick}/> ;
}
