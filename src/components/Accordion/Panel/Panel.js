import React from 'react'
import { ObjectInfo, PanelContainer, Title } from './styles'

const Panel = ({ children, index, activeKey, setActiveKey, ...rest }) => {
  const onPanelClick = () => {
    if (activeKey === index) {
      setActiveKey(null)
    } else {
      setActiveKey(index)
    }
  }

  return (
    <PanelContainer {...rest} onClick={onPanelClick} key={index} isActive={activeKey === index}>
      <Title>{children.props.header}</Title>
      {activeKey === index ? <ObjectInfo>{children.props.children}</ObjectInfo> : null}
    </PanelContainer>
  )
}

export default Panel
