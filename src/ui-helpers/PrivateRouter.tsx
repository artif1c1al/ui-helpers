import {ReactNode} from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  children: ReactNode
  currentRoles: string[]
  expectedRoles: string[]
  authenticated?: boolean
  path?: string
}
export default ({children, currentRoles, expectedRoles, authenticated = false, path}: IProps):JSX.Element => {
  const history = useHistory()
  const haveEnterRight = () => {
    return currentRoles.some((role) =>
      expectedRoles.includes(role))
  }
  if (!authenticated && path) {
    history.push(path)
  }
  return (
    <>{haveEnterRight() && children}</>
  )
}
