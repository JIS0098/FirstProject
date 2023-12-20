import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../styles/fonts.css";
import WriteEditor from "../WYSIWYG/WriteEditor";
import { FontList, FontSizeList } from "./constantsFont";
import styled from "styled-components";

const Font = Quill.import("formats/font");
const Size = Quill.import("formats/size");
Quill.register(Font, true);

const WriteEditorBox = ({ data, setData, setIsAlert, isAlert }) => {
  Font.whitelist = [
    "프리텐다드",
    "나눔고딕",
    "본명조",
    "D2코딩체",
    "교보손글씨체",
    "어비지슉체",
    "치킨체",
    "메이플스토리",
    "조선궁서체",
  ];
  Size.whitelist = ["10", "12", "14", "16", "20", "24", "32", "40"];

  const formats = ["bold", "italic", "strike", "color", "background", "font", "size", "align"];
  const modules = {
    toolbar: [
      ["bold", "italic", "strike", { color: [] }],
      [{ align: "" }, { align: "center" }, { align: "right" }],
      [{ font: Font.whitelist }, { size: Size.whitelist }],
    ],
  };

  const handleContentChange = (content) => {
    setData({ ...data, content: content });
    if (
      content.index === 0 ||
      content === "<p><br></p>" ||
      content === '<p class="ql-align-center"><br></p>' ||
      content === '<p class="ql-align-right"><br></p>' ||
      content === undefined
    ) {
      setIsAlert(true);
    } else {
      setIsAlert(false);
    }
  };

  const handleEditorFocus = (content) => {
    if (
      content.index === 0 ||
      content === "<p><br></p>" ||
      content === '<p class="ql-align-center"><br></p>' ||
      content === '<p class="ql-align-right"><br></p>' ||
      content === undefined
    ) {
      setIsAlert(true);
    } else {
      setIsAlert(false);
    }
  };

  return (
    <div>
      <WriteEditor
        style={{ height: "22.5rem", marginBottom: "5rem" }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={data.content}
        onChange={handleContentChange}
        onFocus={handleEditorFocus}
        sizeList={FontSizeList}
        fontList={FontList}
        placeholder="내용을 입력해주세요."
      />
      {isAlert === true ? <StyledAlertText>값을 입력해 주세요.</StyledAlertText> : ""}
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
