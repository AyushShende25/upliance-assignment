import { RICH_TEXT_OPTIONS, RichTextAction } from '@/constants';
import { ButtonGroup, Flex, IconButton } from '@chakra-ui/react';
import Divider from './divider';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND } from 'lexical';
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const onAction = (id: RichTextAction) => {
    switch (id) {
      case RichTextAction.Bold: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
        break;
      }
      case RichTextAction.Italics: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
        break;
      }
      case RichTextAction.Underline: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
        break;
      }
      case RichTextAction.Strikethrough: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
        break;
      }
      case RichTextAction.Superscript: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'superscript');
        break;
      }
      case RichTextAction.Subscript: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'subscript');
        break;
      }
      case RichTextAction.Highlight: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'highlight');
        break;
      }
      case RichTextAction.LeftAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
        break;
      }
      case RichTextAction.RightAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
        break;
      }
      case RichTextAction.CenterAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
        break;
      }
      case RichTextAction.JustifyAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
        break;
      }
    }
  };
  return (
    <Flex>
      <ButtonGroup size="xs" variant="ghost">
        {RICH_TEXT_OPTIONS.map(({ id, label, icon }) =>
          id === RichTextAction.Divider ? (
            <Divider />
          ) : (
            <IconButton
              key={id}
              aria-label={label as string}
              onClick={() => onAction(id)}
            >
              {icon}
            </IconButton>
          )
        )}
      </ButtonGroup>
    </Flex>
  );
}
export default ToolbarPlugin;
