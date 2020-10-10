import styled from 'styled-components'

export const Container = styled.div`
  grid-area: SL;

  display: flex; // ativa o flexbox
  flex-direction: column; // como padrão é 'row'(linha), e isso faz com q o display se comporte como coluna.
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`
