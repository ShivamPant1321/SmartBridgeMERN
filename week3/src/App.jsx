import TextUpdater from "./components/TextUpdater";
import SimpleForm from "./components/SimpleForm";
import UserCard from "./components/UserCard";
import CustomButton from "./components/CustomButton";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <TextUpdater />
      <SimpleForm />
      <UserCard name="John Doe" email="john@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}
