import cssText from "data-text:~/style/style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://leetcode.cn/problems/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
  element: document.getElementById("ide-top-btns"),
  insertPosition: "beforeend"
})

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const CoachBtn = () => {
  return (
    <div className="flex items-center justify-center ml-1 h-8">
     <button className="h-6">陪练</button>
    </div>
  )
}

export default CoachBtn;
