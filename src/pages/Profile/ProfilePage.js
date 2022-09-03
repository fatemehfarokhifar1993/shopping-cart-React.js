import React from "react";
import Layout from "../../Layout/Layout";
import { useAuth } from "../../Providers/AuthProvider";
import "./ProfilePage.css";
const ProfilePage = () => {
  const userData = useAuth();
  console.log(userData);
  return (
    <Layout>
      <main className="container mx-auto ">
        <section className="m-36 flex items-center justify-center ">
          <div className="shadow rounded-lg flex flex-col items-center justify-center p-12">
            <h3 className="w-full border-b-2  border-amber-600 text-center mb-8 text-lg">Profile Page</h3>
            <p className="text-md">Name is : <span className="text-amber-500">{userData.name}</span></p>
            <p className="text-md">Email is : <span className="text-amber-500">{userData.email}</span></p>
            <p className="text-md">PhoneNumber is : <span className="text-amber-500">{userData.phoneNumber}</span></p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProfilePage;
