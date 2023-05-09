import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
    return (
        <form
            className="todo"
            //  onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                <input
                    type="text"
                    id="note"
                    className="input"
                    // value={task}
                    // onInput={(e) => setTask(e.target.value)}
                    maxLength={60}
                    placeholder="Type to search"
                />
                <label htmlFor="note" className="label">
                    Type to search
                </label>
            </div>
            <button className="btn" aria-label="Search note" type="submit">
                <MagnifyingGlassIcon />
            </button>
        </form>
    );
};

export default Search;
