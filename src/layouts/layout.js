import Routers from "../routers/routers";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-[80vh] flex justify-center items-center">
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
