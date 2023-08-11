import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: end;
    justify-content: space-between;

    width: calc(100% - 19rem);
    height: 4rem;
    padding: 1rem 2rem;
    margin: 1rem;
    border-radius: 1rem;

    background: var(--dark);
    background: linear-gradient(to bottom right, var(--dark), rgba(224,32,65,0.2));
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);

    ${media.lessThan('medium')`
        height: 5rem;
        align-items: center;
		width: 100%;
        padding: 1rem;
        margin: 0;
        border-radius: 0 0 1rem 1rem;
	`}
    
    .header-logo {
        width: 2.5rem;
        display: flex;
        margin-right: 1rem;
        
        ${media.greaterThan('medium')`
            display: none;
        `}
    }
`

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 30%;
    
    ${media.lessThan('medium')`
        display: none;
    `}

    .user-photo {
        height: 2rem;
        border-radius: 50%;
        filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
        margin-left: 1rem;
    }
`
