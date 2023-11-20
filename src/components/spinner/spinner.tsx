import { SpinnerContainer, SpinnerOverlay } from './spinner.styled'

export default function Spinner(): React.JSX.Element {
    return (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    )
}

