import SignUpForm from "../../components/Signup/SignupForm";
import Layout from "../../Layout/Layout";

const SignupPage = () => {
  return (
    <Layout>
      <main className="bd-container">
        <section>
          <SignUpForm/>
        </section>
      </main>
    </Layout>
  );
};

export default SignupPage;
