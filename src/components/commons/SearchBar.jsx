import styled from "styled-components";

function SearchBar({ onChange, value, onSubmit }) {
  return (
    <StyledContainer>
      <InputContainer onSubmit={onSubmit}>
        <StyledSearchBar
          placeholder="찾고싶은 롤링페이퍼를 검색해보세요!"
          type="text"
          name="name"
          autocomplete="off"
          value={value}
          onChange={onChange}
        />
        <StyledSubmitBtn>검색</StyledSubmitBtn>
      </InputContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 5rem auto 0;
`;
const InputContainer = styled.form`
  width: 60%;
  position: relative;
`;
const StyledSearchBar = styled.input`
  width: 100%;
  background: #fff;
  padding: 20px 10px;
  border: 1px solid #ccc;
  border-radius: 15px;

  &:focus {
    outline: 2px solid #a64eff;
  }

  &::placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    padding-left: 25px;
  }
`;
const StyledSubmitBtn = styled.button`
  height: 100%;
  padding: 0 30px;
  position: absolute;
  right: 0;
  background-color: #fff;
  border: #ccc 1px solid;
  border-radius: 0 15px 15px 0;
  cursor: pointer;

  &:hover {
    background-color: #a64eff;
    color: white;
    border: none;
  }
`;

export default SearchBar;
