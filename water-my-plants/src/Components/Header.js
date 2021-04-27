import React, { useState } from "react";
import * as style from "./StyledComponents";

const Header = (props) => {
  //modal state
  const [showModal, setShowModal] = useState(false);
  // modal toggler fn
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div>
        <h1>Water My Plants</h1>
        <style.SettingsIcon onClick={toggleModal} aria-label="Settings Icon" />
        {/* <Modal
          // passing state to modal component as props
          plants={plants}
          showModal={showModal}
          setShowModal={setShowModal}
        /> */}
      </div>
    </>
  );
};

export default Header;
