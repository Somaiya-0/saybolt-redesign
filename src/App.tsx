import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

const Router = import.meta.env.VITE_HASH_ROUTER ? HashRouter : BrowserRouter
import Layout from './components/Layout'
import Home from './pages/Home'
import { About, Message, Services, ServiceDetail, Companies, CompanyDetail, Warehouses, Careers, Contact, NotFound } from './pages/Pages'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="message/:slug" element={<Message />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/:slug" element={<CompanyDetail />} />
          <Route path="warehouses" element={<Warehouses />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
