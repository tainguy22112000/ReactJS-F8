import './App.sass';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import {MantineProvider, Badge, Group, Button, ColorPicker, Text, Modal, InputWrapper, Input, Tab} from '@mantine/core';
// import Input from './components/Input/Input';
import {useState, useEffect, useRef, useReducer} from 'react'
import Counter from './components/Counter/Counter';
import Avatar from './components/Avatar/Avatar';
import Lesson from './components/Lesson/Lesson';
import Timer from './components/Timer/Timer';
import Product from './components/Product/Product';
import Todo from './components/Todo/Todo';
import Theme from './components/Theme/Theme';
import TaskList from './components/TaskList/TaskList';
import Pagination from './components/Pagination/Pagination';
import TableList from './components/TableList/TableList';

import queryString from 'query-string';

// Init state
const initState = 0


// Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';


// Reducer
const reducer = (state, action) => {
  console.log('reducer running')
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

function App() {

  const gifts = [
    'Car',
    'RBG Keyboard',
    'House'
  ];

  // Dispatch
  const [count, dispatch] = useReducer(reducer, initState)
  

  let firstAccess = true;
 
  const contentList = ['API', 'Docs', 'Github'];
  const [gift, setGift] =  useState('Not response');
  const [like, setLike] = useState(0);
  const [job, setJob] = useState('');
  const [toggle, setToggle] = useState(false);
  const [counter, setCounter] = useState(false);
  const [lesson, setLesson] = useState(false);
  const [color, setColor] = useState('rgba(47, 119, 150, 0.7)')
  const [load, setLoad] = useState(false)
  const [theme, setTheme] = useState('dark')
  const [opened, setOpened] = useState(false)
  const [postList, setPostList] = useState({})
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  })

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

  const handleTheme = () => {
      setTheme(!theme)
      console.log(theme)
  }

  const handlePageChange = (newPage) => {
    console.log("New page : ", newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
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

  // Server Side 
  useEffect(() => {
      async function fetchPostList() {
        try {
          //Convert object filter into query
          const paramString = queryString.stringify(filters)

          // Fetch data
          const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
          const response = await fetch(requestUrl);
          const responseJSON = await response.json();
          console.log( { responseJSON } );

          const {data, pagination} = responseJSON;
          setPostList(data);
          setPagination(pagination);
        } catch (error) {
            console.log("Failed to fecth post list: ", error.message);
        }
      }
      fetchPostList();
  }, [filters])

  console.log("Data : ", postList);
  

  return (
    <MantineProvider 
      theme = {{colorScheme: 'light', color: {dark: '#d5d7e0'}}} 
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="App">
          <Navbar/>

          <div className="btn__element">
          {/* {firstAccess && <Button
            title = 'Create'
            href = 'https://www.youtube.com/watch?v=6e1OLH5Iw2U'
            onClick = {randomGift}
            isPrimaryColor = 'blue'
          />
          } */}

          {/* <Button
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
          /> */}
          </div>
         

          <h1>{gift}</h1>
          <h1>{like}</h1>

          {/* <Input
            label = 'Full name'
            type = 'type'
            placeholder = 'Enter the name ... '
            title = 'This is an input element'
            
            onFocus = {() => {console.log(Math.random())}}
          /> */}
          
          <List data = {contentList}>
            {(item, index) => <li key = {index}>{item}</li>}
          </List>

          {/* <Input
            label = ''
            type = 'type'
            placeholder = 'Enter the task ...'
            value = {job}
            onChange = {e => setJob(e.target.value)}
          /> */}

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

          <Avatar/>

          <div style = {{padding: 20}}>
            <button onClick = {() => setLesson(!lesson)}>Show Lesson</button>
            {lesson && <Lesson/>}
          </div>
          
          <Timer/>

          <Badge
              size = "xl"
          >
              Badge
          </Badge>

         
          <div style = {{padding: 20}}>
            <button onClick = {() => setLesson(!lesson)}>Show Lesson</button>
            {lesson && 
            <Group>
              <ColorPicker
                  format='rgba' 
                  value = {color} 
                  onChange ={setColor}
                  size = "xl"
                  fullWidth = {true}
              />
              <Text>{color}</Text>
             
            </Group>
            }
          </div>
           
          {
              lesson && 
              <Modal withCloseButton = {false} centered>
                    Incorrect password !!! 
              </Modal>
          }

          <Product/>

          <div style = {{padding: '0 40px'}}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(DOWN_ACTION)}>-</button>
            <button onClick={() => dispatch(UP_ACTION)}>+</button>
          </div>

          <Todo/>

          {/* <InputWrapper 
              label = "Credit card information"
              id = "input-demo"
              required
              description = "Please enter your credit card information, we need some money"
              error = "Your credit card expired"
          >
              <Input
                  id = "input-demo" 
                  placeholder='Your email'
                  sx = "xs"
                  required
                  onChange={() => console.log('Pressed')}
                  style = {{width: 200, marginTop: 10 }}
              />
          </InputWrapper> */}
          <div style = {{padding: 20}}>
            <Button
                type = "submit"
                size = "sm"
                onClick={() => setOpened(true)}
            >
              Toggle Theme
              
            </Button>
            {load && <Theme/>}
          </div>
          
          <Button
              type = "submit"
              size = "sm"
              onClick = {handleTheme}
              style = {{backgroundColor:  theme ? "red" : "blue"}}
          >
                Change Color Theme
          </Button>

          <Modal
              opened = {opened}
              onClose = {() => setOpened(false)}
              title="Introduce yourself"
              withCloseButton={true}
              centered
              size= {378}
              closeButtonLabel="Close authentication modal"
              closeOnClickOutside={false}
          >
            <Theme theme ={theme}/>
          </Modal>

          <TaskList></TaskList>

          <Pagination
              pagination= {pagination}
              onPageChange={handlePageChange}
          >
          </Pagination>

          <TableList
              postList={postList}
          />
         
      </div>
    </MantineProvider>
    
  
  );
}

export default App;