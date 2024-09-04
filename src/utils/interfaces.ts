import { ReactNode } from "react"

export interface RouteInterface {
  path: string
  component: ReactNode
  routes?: RouteInterface[]
  protection?: ReactNode
}