import { useState } from "react";
import background from "/home/sheri/Documents/Repo/LearnAndWriteMusic/public/wallpaperbetter.com_1920x1080(3).jpg";

function NameField() {
  const [username, setUsername] = useState("");

  const createProfile = async () => {
    const response = await fetch(
      "http://localhost:5000/api/profile/createUsername",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url('${background}')`,
      }}
    >
      <div className="card w-96 bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Erstelle ein Profil</h2>
          <p>Wähl einen Username sowie ein Profilbild</p>

          <ProfilePicture />
          <FileInput />

          <UsernameInput
            username={username}
            setUsername={setUsername}
          />

          <div className="justify-end card-actions">
            <button
              className="btn btn-primary"
              onClick={createProfile}
            >
              Erstellen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileInput() {
  return (
    <input
      type="file"
      className="file-input file-input-ghost"
       placeholder="ProfilePicture"

    />
  );
}

function ProfilePicture(profilePicture, setProfilePicture) {
    const [username, setUsername] = useState("");

  const createProfile = async () => {
    const response = await fetch(
      "http://localhost:5000/api/profile/addPicture",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img
          alt="Profilbild"
          src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
        />
      </div>
    </div>
  );
}

function UsernameInput({ username, setUsername }) {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Username</legend>

      <input
        type="text"
        className="input"
        placeholder="Künstlername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <p className="label">Wähle einen Namen</p>
    </fieldset>
  );
}

export default NameField;