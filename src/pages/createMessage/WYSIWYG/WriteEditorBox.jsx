import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './fonts.css';
import WriteEditor from '../WYSIWYG/WriteEditor';
import { FontList, FontSizeList } from './constantsFont';

const WriteEditorBox = ({ data, setData }) => {
  const Font = Quill.import('formats/font');
  const Size = Quill.import('formats/size');
  Quill.register(Font, true);

  Font.whitelist = ['나눔고딕', 'Maplestory', '치킨체'];
  Size.whitelist = ['10', '12', '14', '16', '20', '24', '32', '40'];

  const formats = ['bold', 'italic', 'strike', 'color', 'background', 'link', 'font', 'size', 'align'];
  const modules = {
    toolbar: [
      ['bold', 'italic', 'strike', { color: [] }, 'link'],
      [{ align: '' }, { align: 'center' }, { align: 'right' }],
      [{ font: Font.whitelist }, { size: Size.whitelist }],
    ],
  };

  console.log();
  const handleContentChange = content => {
    setData({ ...data, content: content });
  };

  return (
    <div>
      <WriteEditor
        style={{ height: '22.5rem', marginBottom: '5rem' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={data.content || ''}
        onChange={handleContentChange}
        sizeList={FontSizeList}
        fontList={FontList}
        placeholder="내용을 입력해주세요."
      />
    </div>
  );
};

export default WriteEditorBox;
