import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTasks } from "../../redux/features/tasks/tasksSlice";


const AddTasksModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onCancel = ()=>{
        reset();
        setIsOpen(false);
    }
    const onSubmit = (data) => {
        dispatch(addTasks(data))
        console.log(data);
        onCancel();

    }
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'programing Hero'} >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="title">Title</label>
                        <input className="w-full border rounded-md" id="title" type="text" {...register('title')} />
                        <label htmlFor="description">Description</label>
                        <textarea name="" id="description" cols="10" className="w-full border rounded-md" {...register('description')}></textarea>
                        <label htmlFor="dedline">Dedline</label>
                        <input className="w-full border rounded-md" id="dedline" type="date" {...register('dedeline')} />
                        <label htmlFor="assignto">Assign to</label>
                        <select name="" id="assignto" {...register('assignto')}>
                            <option value="rakibmolla">Rakib Molla</option>
                            <option value="majedul molla">Majedul Molla</option>
                        </select>
                        <label htmlFor="">Priority</label>
                        <select name="" id="priority" {...register('priority')}>
                            <option value="High"> Hight </option>
                            <option value="High"> Medium </option>
                            <option value="Low"> Low</option>
                        </select>

                    </div>
                    <div className="flex justify-end gap-3 my-2">
                        <div className="bg-red-500 cursor-pointer text-white px-3 py-2 rounded-md" onClick={onCancel}>Cancel</div>
                        <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded-md ">Submit</button>
                    </div>
                </form >

            </Modal >
        </div >
    );
};

export default AddTasksModal;