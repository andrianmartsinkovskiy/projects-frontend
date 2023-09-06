import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/auth.context";
import {Provider} from "react-redux";
import {store} from "./store";





function App() {
  const {token, logout, login, role} = useAuth()
  const routes = useRoutes(role)

  return (
    <AuthContext.Provider value={{
      token, logout, login, role
    }}>
      <Provider store={store}>
        <Router>
          {routes}
        </Router>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
        />
      </Provider>
    </AuthContext.Provider>
  )
}

export default App
