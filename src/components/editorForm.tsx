import { useState } from 'react';
import TextEditor from './textEditor';
import { Box, Button } from '@chakra-ui/react';

function EditorForm() {
  const [value, setValue] = useState(localStorage.getItem('users') || '');

  const handleSave = () => {
    localStorage.setItem('users', value);
  };

  return (
    <Box height="100%">
      <TextEditor
        value={value}
        onChange={(newValue) => setValue(newValue)}
        name="user-data"
        placeholder="enter some text"
      />
      <Button onClick={handleSave} mt={4}>
        Save
      </Button>
    </Box>
  );
}
export default EditorForm;
