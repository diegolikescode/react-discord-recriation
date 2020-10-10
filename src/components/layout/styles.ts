import styled from 'styled-components'

/**
 *  SL: SERVER LIST
 *  SN: SERVER NAME
 *  CI: CHANNEL INFO
 *  CL: CHANNEL LIST
 *  CD: CHANNEL DATA
 *  UL: USER LIST
 *  UI: USER INFO
 * */

export const Grid = styled.div`
  display: grid; //isso diz que eu uso display GRID

  grid-template-columns: 71px 240px auto 240px; //define as colunas do template grid
  grid-template-rows: 46px auto 52px; //define as "linhas" do template grid

  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';

  height: 100vh;
`
