import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function App() {
  const person = "Tamim";
  const size = 38;
  const age = 40;

  return (
    <div>
      <div>
        <Profile person={person} age={age} size={size} />
      </div>
    </div>
  );
}
