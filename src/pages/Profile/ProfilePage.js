import React from "react";
import Layout from "../../Layout/Layout";
import { useAuth } from "../../Providers/AuthProvider";
import "./ProfilePage.css";
const ProfilePage = () => {
  const userData = useAuth();
  console.log(userData);
  return (
    <Layout>
      <main className="bd-container">
        <section>
          <div className="profile-page">
            <h3>Profile Page</h3>
            <p>name is : {userData.name}</p>
            <p>email is : {userData.email}</p>
            <p>phoneNumber is : {userData.phoneNumber}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProfilePage;
