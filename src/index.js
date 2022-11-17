import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DarkModeProvider } from './context/DarkModeContext';
  const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </BrowserRouter>
    </DarkModeProvider>
  
)
