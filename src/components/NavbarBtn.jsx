function NavbarBtn({ onClearPost }) {
  return (
    <div className="ml-5">
      <button
        className="bg-orange-500 w-28 p-2 rounded-lg"
        onClick={onClearPost}
      >
        Clear Post
      </button>
    </div>
  );
}

export default NavbarBtn;
