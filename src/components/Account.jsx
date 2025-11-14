import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Load user info on mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser) {
      alert("Please login first!");
      navigate("/");
    } else {
      setUser(savedUser);
    }
  }, [navigate]);

  // Handle changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Save changes
  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account details updated successfully!");
    setIsEditing(false);
  };

  // Cancel edit
  const handleCancel = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
    setIsEditing(false);
  };

  // Logout user
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You have been logged out successfully!");
    navigate("/");
  };

  // Generate avatar from name
  const getAvatarUrl = (name) => {
    if (!name) return "https://ui-avatars.com/api/?name=User&background=0D6EFD&color=fff&size=128";
    const formattedName = name.trim().replace(/\s+/g, "+");
    return `https://ui-avatars.com/api/?name=${formattedName}&background=0D6EFD&color=fff&size=128`;
  };

  return (
    <div>
      <h2>Account Details</h2>

      {/* Profile Picture */}
      <div className="text-center mb-4">
        <img
          src={getAvatarUrl(user.name)}
          alt="Profile Avatar"
          className="profile-avatar mb-3"
        />
        <h5 className="fw-semibold">{user.name || "User"}</h5>
      </div>

      <form>
        <div className="mb-3 text-start">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-control"
            value={user.password}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
      </form>

      {/* 🧩 Buttons */}
      {!isEditing ? (
        <>
          <button className="btn btn-primary w-100 mt-2" onClick={() => setIsEditing(true)}>
            Edit Details
          </button>
          <button className="btn btn-danger w-100 mt-2" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button className="btn btn-success w-100 mt-2" onClick={handleSave}>
            Save Changes
          </button>
          <button className="btn btn-outline-secondary w-100 mt-2" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-danger w-100 mt-2" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Account;
