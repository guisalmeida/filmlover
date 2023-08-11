import styled from 'styled-components'

export const GenreBox = styled.p`
  padding: 0.25rem 0.5rem;
  margin: 0 0.5rem 0.5rem 0;
  border-radius: 0.5rem;
  border: 1px solid rgba(224, 32, 65, 0.5);
  color: var(--highlight);
  font-size: 0.625rem;
  font-weight: bold;
  background: var(--background);

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  &:last-child {
    margin-right: 0;
  }
`