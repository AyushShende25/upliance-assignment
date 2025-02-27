/* eslint-disable @typescript-eslint/no-unused-vars */
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect, useState } from 'react';
import { $getRoot, $insertNodes } from 'lexical';

interface CustomOnChangePluginProps {
  value: string;
  onChange: (value: string) => void;
}

function CustomOnChangePlugin({ value, onChange }: CustomOnChangePluginProps) {
  const [editor] = useLexicalComposerContext();

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!value || !isFirstRender) return;

    setIsFirstRender(false);
    editor.update(() => {
      const currentHTML = $generateHtmlFromNodes(editor);

      if (currentHTML !== value) {
        $getRoot().clear();
        const parser = new DOMParser();
        const dom = parser.parseFromString(value, 'text/html');
        const nodes = $generateNodesFromDOM(editor, dom);

        $insertNodes(nodes);
      }
    });
  }, [editor, value, isFirstRender]);

  useEffect(() => {
    setIsFirstRender(true);
  }, [value]);

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          onChange($generateHtmlFromNodes(editor));
        });
      }}
    />
  );
}
export default CustomOnChangePlugin;
