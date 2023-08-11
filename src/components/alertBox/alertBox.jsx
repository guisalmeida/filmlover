import * as Styled from './alertBox.styled'
import Logo from '/logo.svg'

export default function AlertBox({ children, show }) {
  return (
    <>
      <Styled.AlertBoxContainer className={show ? 'show' : 'hide'}>
        <img src={Logo} className="logo" alt="Filmlover logo" />
        <p>{children}</p>
      </Styled.AlertBoxContainer>
    </>
  )
}
