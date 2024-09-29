function MainBody({ temp }) {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-11/12 gap-3 grid grid-cols-3 ">
        {temp.map((e, i) => (
          <div key={i} className="border-[2px] border-orange-300 p-2">
            {" "}
            <h2 className="font-semibold ">{e.title}</h2>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBody;
