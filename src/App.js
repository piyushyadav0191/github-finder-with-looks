import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"
import MyProfile from "./pages/MyProfile"
import { ThemeProvider } from "./Context/ThemeContext"

const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/:username" element={<Profile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App