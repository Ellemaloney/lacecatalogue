import {authors, IAuthor} from "../../store/authors.store";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import '../styles/authors-display.css';

function filterAuthors(event: ChangeEvent<HTMLInputElement>,  setFilteredAuthors: Dispatch<SetStateAction<IAuthor[]>>) {
    const allAuthors = [...authors];
    const filteredAuthors = allAuthors.filter((author: IAuthor) => {
        return author.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilteredAuthors(filteredAuthors);
}

export default function AuthorsDisplay() {
    const [filteredAuthors, setFilteredAuthors] = useState<IAuthor[]>([...authors]);
   return (
       <>
           <section className="search-section">
               <div className="search-box m-b-50">
                   <p>
                       <img className="icon" alt="search icon" src="/assets/search-1-bg.png" />
                       <span>Search</span>
                   </p>

                   <div>
                       <input onChange={(e) => filterAuthors(e, setFilteredAuthors)} type="texy" />
                   </div>

               </div>
           </section>

           <section className="authors-section">
                  {
                        filteredAuthors.map((author) => <AuthorCard author={author} />)
                  }
            </section>
       </>
   )
}

function AuthorCard(props: {author: IAuthor}) {
    const {author} = props;
    return (
        <div className="author-card">
            <img src={author.image} alt="Author image"/>
            <div className="author-info">
                <h3 className="author-name">{author.name}</h3>
                <a className="underline" href={author.url}>Go to profile</a>
            </div>
        </div>
    )
}
