import { Grid, GridItem, Box } from '@chakra-ui/react';
import { animated, useSpring, easings } from '@react-spring/web';
import { useState } from 'react';

import Counter from '@/components/counter';
import TextEditor from '@/components/textEditor';
import UserForm from '@/components/userForm';

const AnimatedBox = animated(Box);

function App() {
  const [count, setCount] = useState(0);
  const styles = useSpring({
    height: `${count * 50}px`,
    config: {
      mass: 1,
      tension: 170,
      friction: 26,
      easing: easings.easeInOutCubic,
      duration: 500,
    },
  });
  return (
    <Grid p={10} templateColumns="repeat(2, 1fr)" gap={4}>
      <Counter count={count} setCount={setCount} />
      <TextEditor />
      <GridItem colSpan={2}>
        <UserForm />
      </GridItem>
      <AnimatedBox
        position="absolute"
        bottom={0}
        width={'full'}
        bgColor={'#e2e8f0'}
        zIndex={-5}
        style={{ ...styles }}
      ></AnimatedBox>
    </Grid>
  );
}
export default App;
