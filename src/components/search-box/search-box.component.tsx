import './search-box.style.scss';

import { ChangeEventHandler } from 'react' ;

// interface IChangeHandlerProps{
//   onChangeHandler: (e:string)=> void
// }
// interface ISearchBoxProps extends IChangeHandlerProps{
//   className: string;
//   // placeholder: string | null;
//   placeholder?: string;
// }

type SearchBoxProps = {
  className: string;
  // placeholder: string | null;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ onChangeHandler, placeholder, className }:SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
