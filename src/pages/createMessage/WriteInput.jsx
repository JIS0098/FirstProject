import ReactQuill from 'react-quill';

function WriteInput() {
  const modules = {
    toolbar: {
      container: [['image'], [{ header: [1, 2, 3, 4, 5, false] }], ['bold', 'underline']],
    },
  };
  return (
    <>
      <ReactQuill style={{ width: '100%', height: '18rem' }} modules={modules} />
    </>
  );
}
export default WriteInput;
