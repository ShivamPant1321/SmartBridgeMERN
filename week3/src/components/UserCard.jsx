function UserCard({ name, email }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-lg">{email}</p>
    </div>
  );
}

export default UserCard;
