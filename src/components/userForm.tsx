import { Button, HStack, Input, VStack } from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UserForm() {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleFormChange = () => {
    setHasUnsavedChanges(true);
  };

  useEffect(() => {
    function handleOnBeforeUnload(event: BeforeUnloadEvent) {
      if (hasUnsavedChanges) {
        event.preventDefault();
        return true;
      }
      return null;
    }

    window.addEventListener('beforeunload', handleOnBeforeUnload, {
      capture: true,
    });

    return () => {
      window.removeEventListener('beforeunload', handleOnBeforeUnload);
    };
  }, [hasUnsavedChanges]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userDataObject = Object.fromEntries(formData.entries());

    const userDataWithId = {
      ...userDataObject,
      id: uuidv4(),
    };

    const existingUserData = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUserData = [...existingUserData, userDataWithId];
    localStorage.setItem('users', JSON.stringify(updatedUserData));

    e.currentTarget.reset();
    setHasUnsavedChanges(false);
  };

  return (
    <form onSubmit={handleSubmit} onChange={handleFormChange}>
      <VStack spaceY={6}>
        <HStack gap="10" width="full">
          <Field label="Name" required>
            <Input
              type="text"
              name="name"
              placeholder="john doe"
              variant="outline"
            />
          </Field>
          <Field label="Email" required>
            <Input
              type="email"
              name="email"
              placeholder="me@example.com"
              variant="outline"
            />
          </Field>
        </HStack>
        <HStack gap="10" width="full">
          <Field label="Address" required>
            <Input
              type="text"
              name="address"
              placeholder="random street, wakanda"
              variant="outline"
            />
          </Field>
          <Field label="Phone" required>
            <Input
              type="tel"
              name="phone"
              placeholder="0123456789"
              variant="outline"
            />
          </Field>
        </HStack>
        <Button type="submit" width="1/4">
          Save
        </Button>
      </VStack>
    </form>
  );
}
export default UserForm;
