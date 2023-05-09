import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = ({ setSearch }) => {
    return (
        <div className="note">
            <div className="wrapper">
                <MagnifyingGlassIcon width={24} height={24} />
                <input
                    type="text"
                    id="note"
                    className="input note-input"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type to search"
                />
                <label htmlFor="note" className="label note-label">
                    Type to search
                </label>
            </div>
        </div>
    );
};

export default Search;
