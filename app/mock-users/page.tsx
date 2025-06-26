import { revalidatePath } from "next/cache";
import {auth,currentUser} from "@clerk/nextjs/server";

type MockUser = {
    id: number;
    name: string;
};
export default async function MockUsers() {
    const authObj = await auth();
    const userObj = await currentUser();

    console.log('Auth Object:', authObj);
    console.log('User Object:', userObj);
    const res = await fetch('https://685ceab5769de2bf085e6991.mockapi.io/users');
    const users = await res.json();
    async function addUser(formData: FormData) { 
        'use server';
        const name = formData.get('name') as string;
        const response = await fetch('https://685ceab5769de2bf085e6991.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }   
        const newUser = await response.json();
        revalidatePath('/mock-users'); // Revalidate the path to update the list
        console.log('New user added:', newUser);
    }
    return (
        <div>
            //form for adding a new user
            <form method="POST" action={addUser}>
                <input type="text" name="name" placeholder="Enter user name" required />
                <button type="submit">Add User</button>
            </form>
            <h1>Mock Users List</h1>
            <ul>
                {users.map((user: MockUser) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
