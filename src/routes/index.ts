import { lazy } from 'react'
import NoMatch from '@/views/status/no-match'

const router = [
  {
    path: '/',
    Component: lazy(() => import('@/views/home/Index')),
    routes: [
      // {
      //   path: '/module/:id', // 后面是传递的参数id
      //   component: Main,
      // }
    ]
  },
  {
    path: '/login',
    Component: lazy(() => import('@/views/login/Index')),
    exact: true // 是否为严格模式
  },
  {
    path: '*',
    Component: NoMatch
  }
]

export default router
