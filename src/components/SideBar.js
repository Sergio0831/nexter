import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sidebar'>
      <button
        type='button'
        className='nav-btn'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={isOpen ? "nav-btn--bar-1 change" : "nav-btn--bar-1 "}
        ></div>
        <div
          className={isOpen ? "nav-btn--bar-2 change" : "nav-btn--bar-2 "}
        ></div>
        <div
          className={isOpen ? "nav-btn--bar-3 change" : "nav-btn--bar-3 "}
        ></div>
      </button>
    </div>
  );
};

export default SideBar;
