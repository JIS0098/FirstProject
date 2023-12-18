import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../styles/fonts.css';
import WriteEditor from '../WYSIWYG/WriteEditor';
import { FontList, FontSizeList, FontColorList } from './ConstantsFont';
import styled from 'styled-components';

const WriteEditorBox = ({ data, setData }) => {
  const Font = Quill.import('formats/font');
  const Size = Quill.import('formats/size');
  const Color = Quill.import('formats/color');
  Quill.register(Font, true);

  Font.whitelist = ['나눔고딕', 'Maplestory', '치킨체'];
  Size.whitelist = ['10', '12', '14', '16', '20', '24', '32', '40'];
  Color.whitelist = ['#000000', '#e60000', '#ff9900'];
  const formats = ['bold', 'italic', 'strike', 'color', 'background', 'link', 'font', 'size', 'align'];
  const modules = {
    toolbar: [
      ['bold', 'italic', 'strike', { color: Color.whitelist }, 'link'],
      [{ align: '' }, { align: 'center' }, { align: 'right' }],
      [{ font: Font.whitelist }, { size: Size.whitelist }],
    ],
  };

  const handleContentChange = content => {
    setData({ ...data, content: content });
  };

  return (
    <div>
      <WriteEditor
        onBlur={() => {}}
        style={{ height: '22.5rem', marginBottom: '5rem' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={data.content || ''}
        onChange={handleContentChange}
        sizeList={FontSizeList}
        fontList={FontList}
        colorList={FontColorList}
        placeholder="내용을 입력해주세요."
      />
      {/* {data.content === '' && <StyledAlertText>값을 입력해 주세요.</StyledAlertText>} */}
    </div>
  );
};

const StyledAlertText = styled.div`
  padding-top: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  color: #dc3a3a;
`;

export default WriteEditorBox;
