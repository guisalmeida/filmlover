import React from 'react';
import GenreBoxContainer from './genreBox.styled';

type GenreBoxProps = {
  children: React.ReactNode;
};

export default function GenreBox({
  children,
}: GenreBoxProps): React.JSX.Element {
  return <GenreBoxContainer>{children}</GenreBoxContainer>;
}
