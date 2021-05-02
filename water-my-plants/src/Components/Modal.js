import React from "react";
import { useHistory } from "react-router-dom";
import * as style from "./StyledComponents";

const Modal = (props) => {
  const { showModal, setShowModal } = props;

  const history = useHistory();

  // user logout fn
  const intiateLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <div>
        {/* modal will only render conditionally */}
        {showModal ? (
          <style.ModalPanel>
            <style.ModalWrapper>
              <style.ModalContent>
                {/* add/edit plant form component */}
                <h2>add/edit plant form</h2>
              </style.ModalContent>
              <style.ModalContent>
                {/* user change password form component */}
                <h2>user settings/password update</h2>
              </style.ModalContent>
              <style.CloseModalBtn
                aria-label="Close Button"
                onClick={setShowModal(!showModal)}
              />
              <style.LogoutBtn onClick={intiateLogout}>Log Out</style.LogoutBtn>
            </style.ModalWrapper>
          </style.ModalPanel>
        ) : null}
        {/* end modal */}
      </div>
    </>
  );
};

export default Modal;
