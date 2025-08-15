import { useEffect, useState } from 'react'

type Props = { message?: string | null }
export default function Toast({ message }: Props) {
  const [show, setShow] = useState(!!message)
  useEffect(() => { setShow(!!message); if (message) setTimeout(()=>setShow(false), 3500) }, [message])
  if (!show || !message) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-xl shadow-lg">
      {message}
    </div>
  )
}
