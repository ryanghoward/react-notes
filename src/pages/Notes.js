import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import dummyNotes from "../dummy_notes";

import NoteItem from "../components/NoteItem";

const Notes = () => {
  return (
    <section>
      <header className='notes__header'>
        <h2>My Notes</h2>
        {/* <input type='text' autoFocus placeholder='Create a Note' /> */}
        <button className='btn'>
          <CiSearch />
        </button>
      </header>
      <div className='notes__container'>
        {dummyNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link to='create-note' className='btn add__btn'>
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
