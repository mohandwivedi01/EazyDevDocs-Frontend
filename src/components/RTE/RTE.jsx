
import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function RTE(props) {
  const editorRef = useRef(null);
  const [content, setContent] = useState(props.defaultValue || "");

  return (
    <div className="w-full">
      <Editor
        apiKey="fygpzvmwam0r956764zbplaxe1nok1u1flhp3innzzl1cqly"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        value={content} // ✅ Fixes cursor jumping issue
        init={{
          height: 500, // ✅ Starts with fixed height
          min_height: 500, // ✅ Minimum height
          max_height: 1500, // ✅ Maximum expansion
          menubar: true,
          skin: "oxide-dark",
          content_css: "dark",
          plugins: [
            "image",
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
            "anchor",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | checklist numlist bullist indent outdent | removeformat",
          content_style:
            "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; }",
          autoresize_bottom_margin: 20, // ✅ Adds space when resizing
          autoresize_overflow_padding: 10, // ✅ Prevents abrupt jumps
          autoresize_max_height: 800, // ✅ Expands till max height
        }}
        onEditorChange={(newContent) => {
          setContent(newContent); // ✅ Fixes cursor issue
          props.setContent(newContent);
        }}
      />
    </div>
  );
}

export default RTE;
