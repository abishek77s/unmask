const NavBar = () => {
  return (
    <div className="font-space-grotesk py-8 lg:px-40 px-8  flex items-center gap-4 justify-between">
      <div className=" text-2xl text-white font-extrabold flex items-center justify-center">
        UnMaskIt
      </div>
      <div className=" flex gap-6 font-medium text-white ">
        <p>Support</p>
        <p>Contribute</p>
      </div>
    </div>
  );
};

export default NavBar;
