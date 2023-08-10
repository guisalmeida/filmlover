import * as Styled from './alertBox.styled'
import Logo from '/logo.svg'

export default function AlertBox({ children }) {
  return (
    <>

      <Styled.AlertBoxContainer>
        <img src={Logo} className="logo" alt="Filmlover logo" />
        <p>{children}</p>
      </Styled.AlertBoxContainer>
    </>
  )
}
