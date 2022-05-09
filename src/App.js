import React from 'react'
import Accordion from './components/Accordion/Accordion'
import Panel from './components/Accordion/Panel/Panel'

const App = () => {
  return (
    <Accordion defaultActiveKey={4}>
      <Panel header='Test'>Test</Panel>
      <Panel header='Test2'>Test2</Panel>
      <Panel header='Test3'>Test3</Panel>
      <Panel header='Test4'>Test4</Panel>
      <Panel header='Test5'>Test5</Panel>
      <Panel header='Test6'>Test6</Panel>
      <Panel header='Test7'>Test7</Panel>
    </Accordion>
  )
}

export default App
