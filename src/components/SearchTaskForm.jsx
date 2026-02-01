import React from 'react';
import Field from "@/components/Filed.jsx";

const SearchTaskForm = (props) => {
    const {
        onSearchInput,
    } = props

    return (
        <form
            className="todo__form"
            onSubmit={(event) => event.preventDefault()}
        >
            <Field
                className='todo__field'
                label='Search task'
                id='search-task'
                type='search'
                onInput={onSearchInput} //
            />
        </form>
    );
};

export default SearchTaskForm;