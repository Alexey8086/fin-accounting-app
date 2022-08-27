import SignInPG from './pages/SignInPage'
import SignUpPG from './pages/SignUpPage'
import CostPG from './pages/CostPage'
import ProfitPG from './pages/ProfitPage'
import WalletIdPG from './pages/WalletIdPage'
import WalletsPG from './pages/WalletsPage'
import NotFoundPage from './pages/404'
import { FC } from 'react'

import {
    SIGNIN_PG_ROUTE,
    SIGNUP_PG_ROUTE,
    WALLETS_PG_ROUTE,
    WALLET_PG_ROUTE,
    PROFIT_PG_ROUTE,
    COST_PG_ROUTE,
    NOTFOUND_PG_ROUTE
} from "./utils/consts"


// приватные маршруты
export const privateRoutes: { path: string, Component: FC }[] = [
  {
    path: COST_PG_ROUTE,
    Component: CostPG
  },
  {
    path: PROFIT_PG_ROUTE,
    Component: ProfitPG
  },
  {
    path: WALLET_PG_ROUTE,
    Component: WalletIdPG
  },
  {
    path: WALLETS_PG_ROUTE,
    Component: WalletsPG
  }
]

// публичные маршруты
export const publicRoutes: { path: string, Component: FC }[] = [
  {
    path: SIGNIN_PG_ROUTE,
    Component: SignInPG
  },
  {
    path: SIGNUP_PG_ROUTE,
    Component: SignUpPG
  },
  {
    path: NOTFOUND_PG_ROUTE,
    Component: NotFoundPage
  }
]