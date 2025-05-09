import React from 'react';
import { Image, type ImageProps } from 'react-native';
import { PIECES } from '../../constants';
import { useChessboardProps } from '../../context/props-context/hooks';
import type { PieceType } from '../../types';

type ChessPieceType = {
  id: PieceType;
} & Partial<ImageProps>;

const ChessPiece: React.FC<ChessPieceType> = React.memo(({ id, ...rest }) => {
  const { pieceSize, renderPiece } = useChessboardProps();

  return (
    renderPiece?.(id) ?? (
      <Image
        style={[{ width: pieceSize, height: pieceSize }, rest.style]}
        {...rest}
        source={PIECES[id]}
      />
    )
  );
});

export { ChessPiece };
