import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Provider } from 'react-redux'

import ErrorBoundary from '../ErrorBoundary'
import { NotFound } from '../NotFound'
import store from '../redux/store'

import Home from './home/home'
import TodoMVC from './TodoMVC'

const App: React.FC = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Router>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<TodoMVC />} />
            <Route path="/active" element={<TodoMVC />} />
            <Route path="/completed" element={<TodoMVC />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </ErrorBoundary>
  </Provider>
)

export default App
