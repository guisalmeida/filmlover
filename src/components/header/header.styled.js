import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 60px;
    padding: 0 4rem;

    border-bottom: 1px solid var(--highlight);
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* position: fixed;
    top: 0;
    left: 0;
    z-index: 9; */

    img {
        height: 30px;

        &.user {
            border-radius: 50%;
        }
    }
`
