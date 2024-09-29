import NavbarBtn from "./NavbarBtn";
import NavbarPara from "./NavbarPara";
import NavbarSearch from "./NavbarSearch";

function Navbar({ totalPosts, query, setQuery, onClearPost }) {
  return (
    <div className="flex p-5 justify-center">
      <div className="w-11/12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl">Atomic Blog</h1>
        </div>
        <div className="flex items-center">
          <NavbarPara totalPosts={totalPosts} />
          <NavbarSearch query={query} setQuery={setQuery} />
          <NavbarBtn onClearPost={onClearPost} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
