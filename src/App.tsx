import Header from './components/Header/Header';
import Todo from './features/Todo/Todo';
import { TodoProvider } from './features/Todo/contexts/TodoProvider';


function App() {

  return (
    <div className='container' >
      <Header />
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  )
}

export default App
