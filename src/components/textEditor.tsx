import { Box } from '@chakra-ui/react';
import { EditorThemeClasses } from 'lexical';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import ToolbarPlugin from './toolbarPlugin';
import CustomOnChangePlugin from './customOnchangePlugin';

const theme: EditorThemeClasses = {
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    h5: 'editor-heading-h5',
    h6: 'editor-heading-h6',
  },
  list: {
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
    listitem: 'editor-listItem',
    listitemChecked: 'editor-listItemChecked',
    listitemUnchecked: 'editor-listItemUnchecked',
  },
  text: {
    bold: 'editor-textBold',
    code: 'editor-textCode',
    italic: 'editor-textItalic',
    strikethrough: 'editor-textStrikethrough',
    subscript: 'editor-textSubscript',
    superscript: 'editor-textSuperscript',
    underline: 'editor-textUnderline',
  },
};

interface TextEditorProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function TextEditor({ value, onChange, name, placeholder }: TextEditorProps) {
  const initialConfig = {
    namespace: name,
    theme,
    onError: () => {},
    nodes: [],
  };
  return (
    <Box height="70%">
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <Box className="editor-box">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="editor-textbox"
                aria-placeholder={'Enter some text...'}
                placeholder={
                  <Box className="editor-placeholder">{placeholder}</Box>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </Box>
        <CustomOnChangePlugin value={value} onChange={onChange} />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </LexicalComposer>
    </Box>
  );
}
export default TextEditor;
