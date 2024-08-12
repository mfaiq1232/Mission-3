import React, { useRef } from "react";
import ProfileCard from "./ProfileCard";
import MainCard from "./MainCard";

const Layout1 = () => {
  const screenRef = useRef();
  return (
    <div
      ref={screenRef}
      className="  w-screen flex gap-4 justify-center pb-10 bg-gray-200 dark:bg-gray-900 "
    >
      <div className="hidden lg:block">
        <ProfileCard screenRef={screenRef} />
      </div>
      <div className="mt-20 px-6 lg:px-0">
        <MainCard
          roundness={"rounded-2xl"}
          AboutmeBg={"bg-white"}
        />
      </div>
    </div>
  );
};

export default Layout1;
