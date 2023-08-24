"use client"

import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { FormEventHandler, useState } from 'react'


const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTaskValue, setNewTaskValue] = useState<string>('')

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    console.log(newTaskValue)
    setNewTaskValue("")
  }

  return (
    <div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">Add new task
            <AiOutlinePlus className="ml-2" size={18} />
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
          <form onSubmit={handleSubmitNewTodo}>
            <h3 className='font-bold text-lg'>Add new task</h3>
            <div className='modal-action'>
            <input
            value={newTaskValue}
            onChange={e =>setNewTaskValue(e.target.value)}
             type="text" placeholder="Type here" className="input input-bordered w-full" >
              
             </input>
            <button type='submit' className='btn'>Submit</button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask