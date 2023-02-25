import React from 'react'
import { Provider } from 'react-redux';
import AppFoodPage from './AppFoodPage';
import store from './components/store/index'

const App = () => {
  return (
    <Provider store={store}>
      <AppFoodPage/>
    </Provider>
  )
}

export default App