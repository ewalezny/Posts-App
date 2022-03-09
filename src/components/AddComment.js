import React, {useState} from "react";

const AddComment = ({ add }) => {
    const [form, setForm] = useState({ name: "", email: "", body: "" });

    const handleChange = e => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    return (
        <form>
            <label htmlFor="name">Name:
                <input type="text" name="name" value={form.name} onChange={handleChange}/>
            </label>
            <label htmlFor="email">Email:
                <input type="text" name="email" value={form.email} onChange={handleChange}/>
            </label>
            <label htmlFor="body">Body:
                <input type="text" name="body" value={form.body} onChange={handleChange}/>
            </label>
            <input type="submit" value="Add" onClick={e => {
                e.preventDefault();
                add(form)
            }}/>
        </form>
    )
}

export default AddComment;
