import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setName(currentUser.displayName || "");
    }
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await updateProfile(user, { displayName: name });
      alert("Profile updated successfully!");
    } catch (error) {
      setError("Failed to update profile.");
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {error && <p>{error}</p>}
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

export default UserProfile;
