import React, {useState} from "react";

const AddPost = ({ add }) => {
    const [form, setForm] = useState({ title: "", body: "" });

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
            <label htmlFor="title">Title:
                <input type="text" name="title" value={form.title} onChange={handleChange}/>
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

export default AddPost;
