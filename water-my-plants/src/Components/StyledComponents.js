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

// plant gallery 

export const Body = styled.div`
  margin: 0 auto;
  max-width: 75%;
`;