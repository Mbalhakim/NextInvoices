// CreateUserForm.tsx
'use client';
import { Button } from '@/app/ui/button';
import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function CreateUserForm() {
  // Initialize the form state with an empty object
  const initialState = {};
  
  // Destructure the state and dispatch function from the useFormState hook
  const [state, dispatch] = useFormState(createUser, initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Retrieve the form data using the event target
    const formData = new FormData(event.currentTarget);

    // Dispatch the createUser action with the form data
    dispatch(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <input type="text" name="name" placeholder="Name" required />

      {/* Email */}
      <input type="email" name="email" placeholder="Email" required />

      {/* Password */}
      <input type="password" name="password" placeholder="Password" required />

      {/* Submit button */}
      <Button type="submit">Create User</Button>
    </form>
  );
}
