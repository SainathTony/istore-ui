import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: space-between;
  align-items: center;
  background-color: #1d5555;

  & .brand-name {
    color: white;
  }

  & .items {
    display: flex;
    list-style-type: none;
    & .item {
        padding: 4px 20px;
        cursor: pointer;
        & .link {
            color: white;
            text-decoration: none;
        }
    }
  }
`;
