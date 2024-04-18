import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import AccountMenuSection from "./AccountMenuSection/AccountMenuSection";
import s from "./AccountPage.module.scss";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import { useEffect, useState } from "react";

const AccountPage = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const [username,setUsername] = useState('')

  useEffect(()=>{
let name= localStorage.getItem("name") || "Guest"
setUsername(name) 
  },[])

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>

      <div className="container">
        <main className={s.accountPage} id="account-page">
          <div className={s.wrapper}>
            <PagesHistory history={["/", "My Account"]} />

            <p className={s.welcomeMessage}>
              Welcome! <Link to="/profile">{username}</Link>
            </p>
          </div>

          <div className={s.accountPageContent}>
            <AccountMenuSection />
            <EditProfileForm />
          </div>
        </main>
      </div>
    </>
  );
};
export default AccountPage;
