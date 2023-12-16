import styled, { css } from 'styled-components';
import ReactQuill from 'react-quill';
import color from '../../../styles/color';
import 'react-quill/dist/quill.snow.css';
import './fonts.css';

const StyledFont = ({ font, content }) => css`
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

  .ql-picker.ql-font .ql-picker-label[data-value='${font}']::before,
  .ql-picker.ql-font .ql-picker-item[data-value='${font}']::before {
    font-family: '${font}', cursive;
    content: '${content}' !important;
    font-size: 1.5rem;
  }

  .ql-font-${font} {
    font-family: '${font}';
    font-size: 1.6rem;
  }
`;

const StyledFontSize = ({ size, content }) => css`
  .ql-size-${size} {
    font-size: ${size}px;
  }

  .ql-picker.ql-size .ql-picker-label[data-value='${size}']::before,
  .ql-picker.ql-size .ql-picker-item[data-value='${size}']::before {
    content: '${content}' !important;
    font-size: 1.5rem;
  }
`;

const WriteEditor = styled(ReactQuill)`
  .ql-editor p {
    font-size: 1.6rem;
  }
  .ql-editor::before {
    font-style: normal;
    font-size: 1.5rem;
    color: ${color.gray[300]};
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
    font-size: 1.6rem;
  }

  .ql-formats:nth-child(3) {
    width: 25rem;
  }
  .ql-formats:nth-child(3) > span:nth-child(1),
  .ql-formats:nth-child(3) > select:nth-child(1) {
    margin-right: 0.5rem;
  }

  ${props => props.fontList && props.fontList.map(({ font, content }) => StyledFont({ font, content }))}

  ${props => props.sizeList && props.sizeList.map(({ size, content }) => StyledFontSize({ size, content }))}
`;

export default WriteEditor;
