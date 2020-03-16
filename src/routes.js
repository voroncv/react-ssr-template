// Simple pages
import IndexPage from './pages/Index'
import TestPage from './pages/Test'
import NotFoundPage from './pages/NotFound'

export default [
  {
    path: '/',
    component: IndexPage,
    exact: true,
  },
  {
    path: '/test',
    component: TestPage,
  },
  {
    path: '*',
    component: NotFoundPage
  }
]
