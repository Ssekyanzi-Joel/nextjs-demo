


type User = {
  id: number;
  name: string;
    email: string;
    username: string;
    phone: string;
};

export default async function UsersServer() { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    //render the list of users as part of jsx
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email} - {user.username} - {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}
