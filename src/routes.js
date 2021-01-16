import Home from 'pages/Home'
import Nominations from 'pages/NominatedMovies'

export const routes = [
  {
    url: '/nominations',
    // exact: true,
    component: Nominations,
  },
  {
    url: '/',
    exact: true,
    component: Home,
  },
]