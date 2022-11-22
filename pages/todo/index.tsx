import { useAtom } from 'jotai'
import React from 'react'
import { useHasMounted } from '../../hooks/customHooks';
import { newTodoAtom, addTodoAtom, todosAtom, toggleTodoAtom } from '../../store/todo.store'

export default function Todo() {
  const [todos] = useAtom(todosAtom);
  console.log(todos);
  const [newTodo, setNewTodo] = useAtom(newTodoAtom);
  const [, addTodo] = useAtom(addTodoAtom);
  const [, toggleTodo] = useAtom(toggleTodoAtom);
  const onSubmit = (event: any) => {
    addTodo()
    event.preventDefault();
  }
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
 
  return (
    <div>
      <h1 className="text-4xl my-4 text-center">Practicing <span className='text-bold'>"Jotai"</span></h1>
      <div className='max-w-[400px] mx-auto mt-10'>
        <form onSubmit={onSubmit}>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-md font-medium text-gray-900">New Todo Title</label>
            <input
              value={newTodo}
              onChange={(event) => setNewTodo(event.target.value)}
              name="text"
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="text..." required />
          </div>
          <div className="text-center">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add</button>
          </div>
        </form>
      </div>
      <div className='mt-10 w-[500px] mx-auto'>

        <ul className="w-full text-sm font-medium text-gray-900 rounded-lg border border-b-0 border-gray-200">
          {
            todos.map((todo) =>
              <li key={todo.id} className="py-4 px-4 w-full border-b border-gray-200 flex items-center gap-4">
                  <input 
                  id={todo.id.toString()} 
                  type="checkbox" 
                  checked={todo.done}
                  onClick={()=>toggleTodo(todo.id)}
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" 
                  required
                  readOnly
                  />
                <label htmlFor={todo.id.toString()}>{todo.text}</label>
              </li>
            )
          }
        </ul>

      </div>
    </div>
  )
}
