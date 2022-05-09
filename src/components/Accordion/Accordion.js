import React, { Children, useState } from 'react'
import Panel from './Panel/Panel'

import { AccordionWrapper } from './styles'

const Accordion = ({ children, defaultActiveKey }) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey ? defaultActiveKey - 1 : null)

  return (
    <AccordionWrapper>
      {Children.map(children, (child, index) => (
        <Panel
          data-index={index}
          header={child.header}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
          index={index}>
          {child}
        </Panel>
      ))}
    </AccordionWrapper>
  )
}

export default Accordion
