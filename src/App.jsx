import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Content from './components/Content/Content';
import {MantineProvider} from '@mantine/core';
import Input from './components/Input/Input';
import {useState} from 'react'
import Counter from './components/Counter/Counter';

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
  const [job, setJob] = useState('');
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(false);

  // To optimize code, when jobs prop is rendered at the first time
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    console.log(storageJobs);
    return storageJobs ?? []
  } 
  );

  function handleClick ({isPrimaryColor}) {
    return console.log(isPrimaryColor);
  }; 

  function handledLike () {
    setLike(like +  1);
  }

  const handledJob = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
     
      //Save to local storage
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
    setJob('');
   
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

          <Input
            label = ''
            type = 'type'
            placeholder = 'Enter the task ...'
            value = {job}
            onChange = {e => setJob(e.target.value)}
          />

          <button onClick = {handledJob}>Add</button>

          <ul>
            {jobs.map((job, index) => (
              <li key = {index}>{job}</li>
            ))}
          </ul>
          
          <div style = {{padding: 20}}>
            <button onClick = {() => setToggle(!toggle)}>Toggle</button>
            {toggle && <Content/>}
          </div>
          
          <div style = {{padding: 20}}>
            <button onClick = {() => setCounter(!counter)}>Show Timer</button>
            {counter && <Counter/>}
          </div>
          

      </div>
    </MantineProvider>
  
  );
}

export default App;
