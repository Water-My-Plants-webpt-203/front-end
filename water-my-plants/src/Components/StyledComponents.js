import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

// Header

export const SettingsIcon = styled(FiSettings)`
  font-size: 2.5rem;
  margin-top: 1rem;
  cursor: pointer;
`;

// export const Logo = styled.h1``;

export const Container = styled.div`
  height: 10vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LineBreak = styled.hr`
  border: 1px solid #333;
`;

// Modal

export const ModalPanel = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 850px;
  height: 550px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  top: 0;
  right: 0;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

export const CloseModalBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const LogoutBtn = styled.button`
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  margin: 0 auto;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #49fcd4;
  color: #333;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  text-align: center;

  &:hover {
    background: #333;
    color: #49fcd4;
  }
`;
