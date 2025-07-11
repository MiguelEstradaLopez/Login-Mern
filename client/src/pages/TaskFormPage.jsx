import { useForm } from "react-hook-form"
import { data } from "react-router-dom"
import { useTasks } from "../context/taskContext"

const TaskForm = () => {

  const { register, handleSubmit } = useForm()
  const { createTask } = useTasks()

  const onSubmit = handleSubmit((data) => {
    createTask(data)
    
  })

  return (
    <>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input type="text" className="min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md" placeholder="Title" {...register("title")} />
          <textarea rows="3" className="min-w-full bg-zinc-700 text-white px-4 my-4 py-2 rounded-md" {...register("description")}></textarea>
          <button>
            Save
          </button>
        </form>
      </div>
    </>
  )
}

export default TaskForm
