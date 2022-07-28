import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Content from './components/Content/Content';
import {MantineProvider} from '@mantine/core';
import Input from './components/Input/Input';
import {useState,createContext, useContext} from 'react'
import Counter from './components/Counter/Counter';
import Todo from './components/Todo/Todo';
import Theme from './components/Theme/Theme';
import { ThemeProvider } from './components/provider/ThemeContext';
import { ThemeContext } from './components/provider/ThemeContext';
import {useStore} from './components/store'
import {actions} from './components/store'
import HomePage from './components/pages/Home'
import ContactPage from './components/pages/Contact'
import NewsPage from './components/pages/News'
import GiftPage from './components/pages/GiftPage';
import {Routes, Route, Link} from 'react-router-dom'


function App() {

  
  // DATA
  const contentList = ['API', 'Docs', 'Github'];

  // STATE
  const [job, setJob] = useState('');
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(false);

  // CONTEXT
  const context = useContext(ThemeContext)
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state

  // To optimize code, when jobs prop is rendered at the first time
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    console.log(storageJobs);
    return storageJobs ?? []
  } 
  );


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

  const handleAdd = () => {
      dispatch(actions.addTodoInput(todoInput))
  }


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

         <GiftPage/>

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

          {/* // Todo TASK */}
          <Input
            label = ''
            type = 'type'
            placeholder = 'Enter the task ...'
            value = {todoInput}
            onChange = {e => {dispatch(actions.setTodoInput(e.target.value))}}
          />
          <Button
              onClick = {handleAdd}
          >
              Add
          </Button>

          <button onClick = {handledJob}>Add</button>

          <ul>
            {todos.map((todo, index) => (
              <li key = {index}>{todo}</li>
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
          
          <Todo/>
          
          
          <div style = {{padding: 20}}>
              <button onClick = {context.handleTheme}>Toggles theme</button>
              <Theme/>
          </div>
          
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>

              <li>
                <Link to="/news">NEWS</Link>
              </li>

              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = '/contact' element = {<ContactPage/>}/>
            <Route path = '/news' element = {<NewsPage/>}/>
          </Routes>
      </div>
    </MantineProvider>
  
  );
}

export default App;
