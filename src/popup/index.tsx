import '~/style/style.css'
import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
      <div className="p-3 w-80 h-96 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-emerald-400">
              Welcome Yoho!
          </h2>
          <a className="text-xl" href="https://juliusyolo.com" target="_blank">
              Create By Juliusyolo
          </a>
      </div>
  )
}

export default IndexPopup
