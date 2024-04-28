import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';


function EditContact() {


    const { id } = useParams()
    console.log(id)

    const dispatch = useDispatch()

    const AllContact = useSelector((store) => store.contacts)



    const [form, setForm] = useState({})

    const handleChange = (e) => {
     
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }




    function handleSave() {



        dispatch(editContact({ id, ...form }))

    }

    useEffect(() => {

        AllContact.filter((el) => el.id == id && setForm(el))

    }, [])
    return (
        <div className="flex">
            <div className="w-40 md:w-46 lg:w-48 p-3 shadow">
            </div>
            <div className="flex-grow mx-auto my-4 pt-16 px-4 sm:px-6 md:px-8 lg:px-10">

                <h2 className="text-2xl text-purple-200 font-bold mb-4">Edit Contact</h2>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="first-name">
                        First Name
                    </label>
                    <input
                        className="w-full border border-gray-400 bg-white-100 p-2 rounded-md"
                        id="first-name"
                        type="text"
                        name="first_name"
                        value={form.first_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="last-name">
                        Last Name
                    </label>
                    <input
                        className="w-full border border-gray-400 bg-white-100 p-2 rounded-md"
                        id="last-name"
                        type="text"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="mobile-number">
                        Mobile Number
                    </label>
                    <input
                        className="w-full border border-gray-400 p-2 bg-white-100 rounded-md"
                        id="mobile-number"
                        type="number"
                        name="mob"
                        value={form.mob}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2" htmlFor="status">
                        Status
                    </label>
                    <select
                        className="w-full border border-gray-400 p-2 bg-white-100 rounded-md"
                        id="status"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >
                        <option value={'active'}>Active</option>
                        <option value={"inactive"}>Inactive</option>
                    </select>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSave}
                >
                    Save Contact
                </button>
            </div>
        </div>
    );
    
}


export default EditContact