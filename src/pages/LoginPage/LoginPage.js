import LoginForm from "../../components/Login/LoginForm";
import Layout from "../../Layout/Layout";

const LoginPage = () => {
  return (
    <Layout>
      <main className="bd-container">
        <section>
          <LoginForm />
        </section>
      </main>
    </Layout>
  );
};

export default LoginPage;
