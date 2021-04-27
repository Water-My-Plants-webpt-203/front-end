import React from "react";
import { useHistory } from "react-router-dom";

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
          <div>
            <div>
              {/* add/edit plant form component */}
              <h2>add/edit plant form</h2>
            </div>
            <div>
              {/* user change password form component */}
              <h2>user settings/password update</h2>
            </div>
            <button
              aria-label="Close Button"
              onClick={setShowModal(!showModal)}
            />
          </div>
        ) : null}
        {/* end modal */}
      </div>
    </>
  );
};

export default Modal;
