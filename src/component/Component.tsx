// import * as ts from "typescript";
import React from "react";
import Editor from "@monaco-editor/react";

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

export const Component: React.FC<ComponentProps> = () => (
  <div>
    <Editor
      height="90vh"
      width="90vh"
      defaultLanguage="typescript"
      defaultValue="// comment"
      onChange={debounce((text) => {
        console.log(
          `Change #${++counter}`,
          JSON.stringify(
            // ts.transpileModule(text, {})
            {bla: text}
          )
        );
      }, 1500)}
    />
    <div>jmarceli-react-ts-library</div>
    <div>sample component</div>
    <div>rly?</div>
  </div>
);
