import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import {MantineProvider} from '@mantine/core';
import Input from './components/Input/Input';

function App() {

  let firstAccess = true;
  const contentList = ['API', 'Docs', 'Github'];

  function handleClick ({isPrimaryColor}) {
    return console.log(isPrimaryColor);
  };

  function List ({data, children}) {
    return (
      <ul>
        {data.map((...props)=> children(...props))}
      </ul>
    )
  }

  return (
    <MantineProvider 
      theme = {{colorScheme: 'dark', color: {dark: '#d5d7e0'}}} 
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="App">
          <Navbar/>

          {firstAccess && <Button
            title = 'Create'
            href = 'https://www.youtube.com/watch?v=6e1OLH5Iw2U'
            onClick = {handleClick}
          />
          }

          <Input
            label = 'Full name'
            type = 'type'
            placeholder = 'Enter the name ... '
            title = 'This is an input element'
            onFocus = {() => {console.log(Math.random())}}
          />
          
          <List data = {contentList}>
            {(item, index) => <li key = {index}>{item}</li>}
          </List>
      </div>
    </MantineProvider>
  
  );
}

export default App;
