import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Notification = (props) => {
  const [exit, setExit] = useState(false)
  const [width, setWidth] = useState(0)
  const [intervalID, setIntervalID] = useState(null)

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5
        }

        clearInterval(id)
        return prev
      })
    }, 20)

    setIntervalID(id)
  }

  const handlePauseTimer = () => {
    clearInterval(intervalID)
  }

  const handleCloseNotification = () => {
    handlePauseTimer()
    setExit(true)
    setTimeout(() => {
      props.dispatch({
        type: 'REMOVE_NOTIFICATION',
        id: props.id,
      })
    }, 400)
  }

  useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification()
    }
  })

  useEffect(() => {
    handleStartTimer()
  }, [])

  return (
    <div>
      <div className="">
        {exit ? (
          <motion.div animate={{ x: 100 }} transition={{ duration: 0.5 }}>
            <p className="text-center">{props.message}</p>
            <div
              className="h-2 rounded bg-pink-600 bg-opacity-75"
              style={{ width: `${width}%` }}
            />
          </motion.div>
        ) : (
          <div
            onMouseOver={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className=""
          >
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center">{props.message}</p>
              <div
                className="h-2 rounded bg-pink-600 bg-opacity-75"
                style={{ width: `${width}%` }}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notification
