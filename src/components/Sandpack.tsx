import type React from "react";
import {
  Sandpack as OriginalSandpack,
  SandpackFiles,
  SandpackThemeProp,
} from "@codesandbox/sandpack-react";

const theme: SandpackThemeProp = {
  colors: {
    surface1: "#2d333b",
    surface2: "#2d333b",
    surface3: "rgba(99,110,123,0.4)",
    // clickable: "#999999",
    // base: "#808080",
    // disabled: "#4D4D4D",
    // hover: "#C5C5C5",
    // accent: "#0971F1",
    // error: "#ff453a",
    // errorSurface: "#ffeceb",
  },
  syntax: {
    plain: "#adbac7",
    comment: {
      color: "#768390",
    },
    keyword: "#F47067",
    tag: "#8DDB8C",
    punctuation: "#adbac7",
    definition: "#DCBDFB",
    property: "#DCBDFB",
    static: "#6CB6FF",
    string: "#96D0FF",
  },
  font: {
    body: '"Pretendard Variable", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif"',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    // size: "13px",
    // lineHeight: "20px",
  },
};

interface SandpackProps {
  files: SandpackFiles;
}

const Sandpack: React.FC<SandpackProps> = (props) => {
  return (
    <OriginalSandpack template="react" theme={theme} files={props.files} />
  );
};

export default Sandpack;
