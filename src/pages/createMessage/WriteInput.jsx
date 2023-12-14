import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const WriteInput = () => {
  const [quillValue, setQuillValue] = useState('');

  const formats = ['bold', 'italic', 'strike', 'color', 'background', 'link', 'font', 'size'];

  const modules = {
    toolbar: [
      ['bold', 'italic', 'strike', { color: [] }, { background: [] }, 'link'],
      [{ font: [] }, { size: [] }],
    ],
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getText());
  };

  return (
    <div>
      <ReactQuill
        style={{ height: '17.8rem', marginBottom: '5rem' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={quillValue || ''}
        onChange={handleQuillChange}
      />
    </div>
  );
};

export default WriteInput;
