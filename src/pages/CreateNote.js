import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const CreateNote = () => {
  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'>
          <IoIosArrowBack />
        </Link>
        <button className='btn lg primary'>Save</button>
      </header>
      <form className='create-note__form'>
        <input type='text' placeholder='Note Title' autoFocus />
        <textarea rows='28' placeholder='Create a Note...'></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
