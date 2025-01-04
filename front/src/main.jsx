import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './components/Home';
import { Productos } from './components/Productos';
import { Producto } from './components/Producto';
import { Cesta } from './components/Cesta';
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Productos />} />
            <Route path='*' element={<Productos />} />
            <Route path='productos' element={<Productos />} />
            <Route path='productos/:id' element={<Producto />} />
            <Route path='cesta' element={<Cesta />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
