import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '../button.component';

describe('Component Button', () => {
  it('Should call funcion onClick', () => {

    render(<Button >Adicionar</Button>)
  });
});
