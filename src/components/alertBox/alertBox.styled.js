import styled from 'styled-components'

export const AlertBoxContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.2);

  background: rgba(29, 39, 53, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .logo {
    width: 3rem;
    margin-right: 1rem;
  }
  
  `