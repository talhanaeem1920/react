import React, { useState, useEffect } from "react";
import '../stylesheets/Input.scss';

const Input = (props) => {
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.target.value)
    };
    return (
        <div className="Input">
            <form onSubmit={(e)=> props.handleSubmit(e,query)}>
                <label htmlFor="test">Image Search</label>
                <input type="text" id="test" value={query} onChange={handleChange} />
            </form>
        </div>
    );
}

export default Input;