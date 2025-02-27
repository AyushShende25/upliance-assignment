import {
  Highlighter,
  Justify,
  JustifyLeft,
  JustifyRight,
  Subscript,
  Superscript,
  TextCenter,
  TypeBold,
  TypeItalic,
  TypeStrikethrough,
  TypeUnderline,
} from 'react-bootstrap-icons';

export enum RichTextAction {
  Bold = 'bold',
  Italics = 'italics',
  Underline = 'underline',
  Strikethrough = 'strikethrough',
  Superscript = 'superscript',
  Subscript = 'subscript',
  Highlight = 'highlight',
  LeftAlign = 'leftAlign',
  CenterAlign = 'centerAlign',
  RightAlign = 'rightAlign',
  JustifyAlign = 'justifyAlign',
  Divider = 'divider',
}

export const RICH_TEXT_OPTIONS = [
  { id: RichTextAction.Bold, icon: <TypeBold />, label: 'Bold' },
  { id: RichTextAction.Italics, icon: <TypeItalic />, label: 'Italics' },
  { id: RichTextAction.Underline, icon: <TypeUnderline />, label: 'Underline' },
  { id: RichTextAction.Divider },
  {
    id: RichTextAction.Highlight,
    icon: <Highlighter />,
    label: 'Highlight',
    fontSize: 10,
  },
  {
    id: RichTextAction.Strikethrough,
    icon: <TypeStrikethrough />,
    label: 'Strikethrough',
  },
  {
    id: RichTextAction.Superscript,
    icon: <Superscript />,
    label: 'Superscript',
  },
  {
    id: RichTextAction.Subscript,
    icon: <Subscript />,
    label: 'Subscript',
  },
  { id: RichTextAction.Divider },
  {
    id: RichTextAction.LeftAlign,
    icon: <JustifyLeft />,
    label: 'Align Left',
  },
  {
    id: RichTextAction.CenterAlign,
    icon: <TextCenter />,
    label: 'Align Center',
  },
  {
    id: RichTextAction.RightAlign,
    icon: <JustifyRight />,
    label: 'Align Right',
  },
  {
    id: RichTextAction.JustifyAlign,
    icon: <Justify />,
    label: 'Align Justify',
  },
];

export const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
