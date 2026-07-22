import { useState } from 'react'

// No backend / no Axios calls per the auth-ui task spec.
// Reads the form data, console.logs it, shows a loading spinner
// for ~900ms, then displays a toast with the given message.
export function useDummySubmit(formName) {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })

  function submit(data, resultMessage) {
    setLoading(true)
    console.log(`[${formName}] submitted:`, data)

    setTimeout(() => {
      setLoading(false)
      setToast({ show: true, message: resultMessage })
      setTimeout(() => setToast(t => ({ ...t, show: false })), 2600)
    }, 900)
  }

  return { loading, toast, submit }
}
