import Sidebar from "@/components/BuilderPage/Sidebar/Sidebar/Sidebar";

const BuilderLayout = ({ children }) => {
  return (
    <main>
      <Sidebar />
      {children}
      <h2>Live Resume Component</h2>
    </main>
  );
};

export default BuilderLayout;
