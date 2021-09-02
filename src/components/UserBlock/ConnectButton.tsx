import styled from "styled-components";

interface Props {
  isDark: boolean;
}

const ConnectButton = styled.button`
  border-radius: 50px;
  white-space: nowrap;
  padding: 6px 17px;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 1px solid ${({ isDark }: Props) => (isDark ? "#fff" : "#000")};
  background: ${({ isDark }: Props) => (isDark ? "#323842" : "#fff")};
  color: ${({ isDark }: Props) => (isDark ? "#fff" : "#000")};
  margin-top: 4px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ isDark }: Props) => (isDark ? "#000" : "#fff")};
    background: ${({ isDark }: Props) => (isDark ? "#fff" : "#000")};
  }
`;

export default ConnectButton;
