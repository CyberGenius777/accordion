import styled, { css, keyframes } from 'styled-components'

const onOpenPanel = keyframes`
	from{
		transform: rotate(45deg);
	}
	to{
		transform: rotate(225deg);
		
	}
`

const onClosePanel = keyframes`
	from{
		transform: rotate(225deg)
	}
	to{
		transform: rotate(405deg)
	}
`

export const PanelContainer = styled.div`
  transition: all 0.3s;
  & > h4:before {
    content: '';
    border-bottom: 3px solid #333333;
    border-right: 3px solid #333333;
    width: 10px;
    height: 10px;
    display: inline-block;
    position: relative;
    bottom: 1px;
    margin-right: 20px;
    transform-origin: 50% 50%;
  }
  ${({ isActive }) =>
    isActive
      ? css`
          & > h4 {
            color: green;
          }
          & > h4:before {
            animation: ${onOpenPanel} 0.3s ease-in-out;
            animation-fill-mode: forwards;
            border-bottom: 3px solid green;
            border-right: 3px solid green;
          }
        `
      : css`
          & > h4 {
            color: #333333;
          }
          & > h4:before {
            animation: ${onClosePanel} 0.3s ease-in-out;
            animation-fill-mode: forwards;
            border-bottom: 3px solid #333333;
            border-right: 3px solid #333333;
          }
        `}
`

export const Title = styled.h4`
  transition: color 0.2s;
  cursor: pointer;
`

export const ObjectInfo = styled.span`
  margin-left: 30px;
`
