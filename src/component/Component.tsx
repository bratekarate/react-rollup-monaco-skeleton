// import * as ts from "typescript";
import React from "react";
import Editor from "@monaco-editor/react";
import { initVimMode, VimMode } from "monaco-vim";
// console.log(initVimMode);
//
VimMode.Vim.map("<C-[>", "<Esc>", "insert");

interface ComponentProps {  
  flag?: boolean;
}

let counter = 0;
const debounce = (handler: (...args: any[]) => void, time: number) => {
  let timeout = null;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => handler(...args), time);
  };
};

export const Component: React.FC<ComponentProps> = () => {
  const defaultValue = "// comment";
  const [text, setText] = React.useState(defaultValue);
  // @ts-ignore
  const [ _vimMode, setVimMode ] = React.useState(null);

  return (
    <div>
      <Editor
        height="90vh"
        width="90vh"
        defaultLanguage="typescript"
        defaultValue={defaultValue}
        onMount={(editor) => {
        // onMount={() => {
          setVimMode(initVimMode(editor, document.getElementById('status-bar')));
        }}
        onChange={debounce((text) => {
          console.log(
            `Change #${++counter}`,
            JSON.stringify(
              // ts.transpileModule(text, {})
              { bla: text }
            )
          );
          setText(text);
        }, 1500)}
      />
      <pre>
        {/*text.split("\n").map(x => <div>{x}</div>) */}
        {text}
      </pre>
    </div>
  );
};
