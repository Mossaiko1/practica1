const UserList = ({ users }) => {
    return (
        <div className="container mt-4">
            <h3>Lista de usuarios</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;