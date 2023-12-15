import styled from 'styled-components';
import ReactQuill from 'react-quill';
import color from '../../../styles/color';
import 'react-quill/dist/quill.snow.css';
import './styles/fonts.css';
import './styles/fontSize.css';

const WriteEditor = styled(ReactQuill)`
  .ql-editor p {
    font-size: 1.6rem;
  }
  .ql-toolbar {
    border-top-right-radius: 0.8rem;
    border-top-left-radius: 0.8rem;
    padding: 1.2rem;
    background-color: ${color.gray[100]};
  }
  .ql-container {
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
  .ql-formats:nth-child(3) {
    width: 25rem;
  }

  .ql-formats:nth-child(3) > span {
    margin-right: 0.25rem;
  }

  .ql-picker.ql-font .ql-picker-label::before,
  .ql-picker.ql-font .ql-picker-item::before,
  .ql-picker.ql-size .ql-picker-label::before,
  .ql-picker.ql-size .ql-picker-item::before {
    font-size: 1.5rem;
  }

  .ql-picker-options .ql-picker-item {
    font-family: #{attr(data-value)};
    &::before {
      content: attr(data-value) !important;
    }
  }

  .ql-picker.ql-font .ql-picker-label::before,
  .ql-picker.ql-font .ql-picker-item::before {
    content: attr(data-value) !important;
  }

  .ql-picker.ql-font {
    .ql-active {
      &:before {
        content: attr(data-value) !important;
      }
    }
  }

  .ql-picker.ql-font .ql-picker-label[data-value='Maplestory']::before,
  .ql-picker.ql-font .ql-picker-item[data-value='Maplestory']::before {
    font-family: 'Maplestory', cursive;
    content: 'Maplestory' !important;
  }

  .ql-picker.ql-font .ql-picker-label[data-value='치킨체']::before,
  .ql-picker.ql-font .ql-picker-item[data-value='치킨체']::before {
    font-family: '치킨체', cursive;
    content: '치킨체' !important;
  }

  .ql-picker.ql-font .ql-picker-label[data-value='나눔고딕']::before,
  .ql-picker.ql-font .ql-picker-item[data-value='나눔고딕']::before {
    font-family: '나눔고딕', cursive;
    content: '나눔고딕' !important;
  }

  .ql-font-Maplestory {
    font-family: 'Maplestory';
  }
  .ql-font-치킨체 {
    font-family: '치킨체';
  }
  .ql-font-나눔고딕 {
    font-family: '나눔고딕';
  }
`;

export default WriteEditor;
