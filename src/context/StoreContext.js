// import React, { useState, useEffect, useContext } from "react"
import React, { useState, useEffect } from "react"

const initialStoreState = {
  isAdding: false,
  checkout: { lineItems: [] },
}

const StoreContext = React.createContext({
  store: initialStoreState,
  setStore: () => null,
})

const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState(initialStoreState)

  useEffect(() => {

  }, [])

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

// function useStore() {
//   const { store } = useContext(StoreContext)
//   return store
// }

export {
  StoreContextProvider,
}
