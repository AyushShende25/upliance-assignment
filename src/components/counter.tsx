import { Button, HStack, Text, VStack } from '@chakra-ui/react';

function Counter({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <VStack p={6} spaceY={3}>
      <Text textStyle="xl" fontWeight="semibold">
        {count}
      </Text>
      <HStack spaceX={4}>
        <Button colorScheme="red" onClick={decrement} size="lg">
          Decrement
        </Button>
        <Button colorScheme="gray" onClick={reset} size="lg">
          Reset
        </Button>
        <Button colorScheme="blue" onClick={increment} size="lg">
          Increment
        </Button>
      </HStack>
    </VStack>
  );
}
export default Counter;
