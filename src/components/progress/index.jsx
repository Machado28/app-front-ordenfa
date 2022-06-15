import React, { createRef } from 'react';
import { Fade, CircularProgress } from '@material-ui/core';
import * as S from './styles';

const Progress = () => {
  return (
    <S.ProgressContainer>
      <CircularProgress />
    </S.ProgressContainer>
  );
};

export default Progress;
