import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap'
import SinglePageWebsite from './components/SinglePageWebsite';
import WebsiteWithRoutes from './components/WebsiteWithRoutes'

function App() {
  const [useRoutes, setUseRoutes] = useState(false)
  const toggleRoutes = () => {
    setUseRoutes(prevState => !prevState)
  }

  return (
    <div className='App' >
      <div className='route'>
        <Button onClick={toggleRoutes}>
          {useRoutes ? 'Switch to Single Page Website' : 'Switch to Website with Routes'}
        </Button>
        {useRoutes ? <WebsiteWithRoutes /> : <SinglePageWebsite /> }
      </div>
    </div>
  );
}

export default App;
