import React, { useRef } from 'react'
import { ObjectInfo, PanelContainer, Title } from './styles'

const Panel = ({ children, index, activeKey, setActiveKey, ...rest }) => {
  const ref = useRef(null)
  console.log('ref', ref.current ? ref.current.offsetHeight : null)
  const onPanelClick = (e, idx) => {
    if (activeKey === idx) {
      setActiveKey(null)
    } else {
      setActiveKey(idx)
    }
  }

  return (
    <PanelContainer
      {...rest}
      // objectRef={ref ? ref.current.offsetHeight : null}
      key={index}
      isActive={activeKey === index}>
      <Title>{children.props.header}</Title>
      {activeKey === index ? <ObjectInfo ref={ref}>{children.props.children}</ObjectInfo> : null}
    </PanelContainer>
  )
}

export default Panel
