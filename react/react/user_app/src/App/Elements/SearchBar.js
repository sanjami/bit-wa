import React  from 'react';

const SearchBar =(props)=> {
    return (
        <nav>
            <div className=" container nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" onChange={props.handleChange} value={props.inputValue} required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>

                </form>
            </div>
        </nav>
    )
}

export default SearchBar;