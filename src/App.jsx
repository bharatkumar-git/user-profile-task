import { useEffect, useState } from "react";

import { IoFilter } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [usersInfoList, setUserInfoList] = useState([]);
  console.log(usersInfoList);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserInfoList(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const EachUser = props => {
    const {userDetails} = props
    return (
    <li className="app-user-cards-li-item">
      <p><span className="bold-text">Name:  </span>{userDetails.name}</p>
      <p><span className="bold-text">Phone:  </span>{userDetails.phone}</p>
      <p><span className="bold-text">Username:  </span>{userDetails.username}</p>
      <p><span className="bold-text">Email:  </span>{userDetails.email}</p>
      <p><span className="bold-text">Website:  </span>{userDetails.website}</p>
      <hr />
      <div className="app-user-profile-icons-container">
        <FaUserEdit size={20} />
        <IoMdTrash size={20} />
      </div>
    </li>
  )};

  return (
    <div className="app-main-container">
      <div className="app-head-container">
        <span className="app-logo-text">UserProfile</span>
        <button className="app-add-user-button">Add User</button>
      </div>
      <div className="app-content-container">
        <div className="app-content-search-filter-container">
          <input className="app-content-input" />
          <IoFilter size={24} />
        </div>
        <div className="app-users-content-container">
          <ul className="app-user-cards-ul">
            {usersInfoList.map((user) => (
              <EachUser key={user.id} userDetails={user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
