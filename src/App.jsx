import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import {MantineProvider} from '@mantine/core';
import Input from './components/Input/Input';
import {useState} from 'react'

function App() {

  const gifts = [
    'Car',
    'RBG Keyboard',
    'House'
  ];

  let firstAccess = true;
  const contentList = ['API', 'Docs', 'Github'];
  const [gift, setGift] =  useState('Not response');
  const [like, setLike] = useState(0);

  function handleClick ({isPrimaryColor}) {
    return console.log(isPrimaryColor);
  }; 

  function handledLike () {
    setLike(like +  1);
  }

  function List ({data, children}) {
    return (
      <ul>
        {data.map((...props)=> children(...props))}
      </ul>
    )
  }

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  }
  

  return (
    <MantineProvider 
      theme = {{colorScheme: 'dark', color: {dark: '#d5d7e0'}}} 
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="App">
          <Navbar/>

          <div className="btn__element">
          {firstAccess && <Button
            title = 'Create'
            href = 'https://www.youtube.com/watch?v=6e1OLH5Iw2U'
            onClick = {randomGift}
            isPrimaryColor = 'blue'
          />
          }

          <Button
            title = 'Like'
            href = ''
            onClick = {handledLike}
            isPrimaryColor = "violet"
          />

          <Button
            title = 'Reset'
            href = ''
            onClick = {() => {setLike(0)}}
            isPrimaryColor = "red"
          />
          </div>
         

          <h1>{gift}</h1>
          <h1>{like}</h1>

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
