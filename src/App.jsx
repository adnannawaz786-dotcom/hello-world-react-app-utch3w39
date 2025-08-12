```jsx
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World!
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your React + Vite + Tailwind CSS application
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <span className="text-blue-600 font-semibold">⚛️ React</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <span className="text-purple-600 font-semibold">⚡ Vite</span>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <span className="text-cyan-600 font-semibold">🎨 Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
```