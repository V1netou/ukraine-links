import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.section`
    max-width: ${props => handleSize(props.size)};
    margin: 0 auto;
    display: flex;
    padding: 0 1.5rem;
    height: 100%;
    ${(props) => props.fullWidth ? 'width: 100%' : ''};
    justify-content: ${((props) => props.justify === 'center' ? 'center' : props.justify === 'left' ? 'left' : props.justify === 'right' ? 'right' : 'space-between')};
    flex-direction: ${(props) => props.horizontal ? 'row' : 'column'};
    align-items: ${((props) => props.align === 'center' ? 'center' : props.align === 'left' ? 'left' : props.align === 'right' ? 'right' : 'space-between')};
`

const Container = ({children, fullWidth, align, horizontal, justify, size}) => {

  return (
    <StyledContainer fullWidth={fullWidth} align={align} horizontal={horizontal} justify={justify} size={size}>{children}</StyledContainer>
  )
}

const handleSize = widthOption => {
  switch(widthOption) {
      case 'sm':
          return '400px';
      case 'md': 
          return '600px';
      default:
          return '800px';
  }
}


export default Container;
