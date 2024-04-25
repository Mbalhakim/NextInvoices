import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function CreateUserForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);

  return (
    <form onSubmit={(e) => { e.preventDefault(); dispatch(); }}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link href="/dashboard/users" className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
          Cancel
        </Link>
        <Button type="submit">Create User</Button>
      </div>
    </form>
  );
}
