import { createContext, useContext, useState } from 'react'

const SelectedCardContext = createContext()

export const UseSelectedCardContext = () => {
  return useContext(SelectedCardContext)
}

export const SelectedCardProvider = ({ children }) => {
  const [selectedCardData, setSelectedCardData] = useState(true)

  const toggleWidth = () => {
    setSelectedCardData(prev => !prev)
  }

  return (
    <SelectedCardContext.Provider
      value={{
        selectedCardData,
        setSelectedCardData,
        toggleWidth
      }}
    >
      {children}
    </SelectedCardContext.Provider>
  )
}
