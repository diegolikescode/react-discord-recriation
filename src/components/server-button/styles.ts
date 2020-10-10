import styled from 'styled-components'

import { Props } from '.'

export const Button = styled.div<Props>`
  display: flex;
  align-items: center; // align-items alinha verticalmente
  justify-content: center; // justify-content alinha horizontalmente
  flex-shrink: 0; // isso diz que não pode espremer o que está dentro do meu botão

  width: 48px;
  height: 48px;

  border-radius: 50%;

  margin-bottom: 8px;

  background-color: ${props =>
    props.isHome && props.selected ? 'var(--discord)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;

  > img {
    width: 24px;
    height: 24px;
  }

  &::before {
    width: 9px;
    height: 9px;
    position: absolute; // position absolute só funciona se vc colocar position: relative no PAI do componente
    left: -17px;
    top: calc(50% - 4.5px);

    background-color: var(--white);
    border-radius: 50%;

    content: '';
    display: ${props => (props.hasNotification ? 'inline' : 'none')};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${props => props.mentions && props.mentions}';
    display: ${props =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'};
  }

  transition: border-radius 0.2s background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 20px;
    background-color: ${() => 'var(--discord)'};
  }
`
