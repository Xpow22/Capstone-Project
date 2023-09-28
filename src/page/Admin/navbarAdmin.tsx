const NavbarAdmin = () => {
  return (
    <div className="shadow-lg w-full">
      <div className="flex justify-end mx-6 my-3 items-center ">
        <h1 className="font-semibold pr-2 text-lg">Hi, Admin</h1>
        <div className="cursor-pointer">
          <img
            className=" w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 "
            src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="Bordered avatar"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
