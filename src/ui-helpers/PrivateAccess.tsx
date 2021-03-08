import Ract, {ReactNode} from 'react'

interface IProps {
  children: ReactNode
  currentRoles: string[]
  expectedRoles: string[]
}

export default ({children, currentRoles, expectedRoles}: IProps): JSX.Element => {
  const showContent = () => {
    if(currentRoles.length > 0 && expectedRoles.length > 0) {
      let isContain = false
      currentRoles.forEach((role) => {
        isContain =  expectedRoles.includes(role)
      })
      return isContain
    } else {
      console.error('You should specify "currentRoles" and "expectedRoles"')
      return false
    }
  }
  const isAuth = showContent()
  return (
    <>
      {isAuth && children}
    </>
  )
}
