import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="bg-[#040440] w-[280px] h-[100vh] lg:flex flex-col items-center fixed hidden">
        <div className="text-white flex items-center w-[80%] h-[90px]">
          <i className="fa fa-cube text-2xl"></i>
          <h2 className="text-[21px] ml-2 font-medium">Dashboard</h2>
        </div>
        <div className="mt-4 w-[80%]">
          <div className="text-white flex items-center h-[40px] my-1 hover:bg-[#2d2d69] px-4 rounded-md cursor-pointer group">
            <div className="w-[20px]">
              <i className="fa fa-tachometer text-[18px]"></i>
            </div>
            <h2 className="text-[16px] ml-4 ">Dashboard</h2>
          </div>

          <div className="text-white flex justify-between items-center h-[40px] my-1 px-4 rounded-md cursor-pointer hover:bg-[#2d2d69] group">
            <div className="flex">
              <div className="w-[20px]">
                <i className="fa fa-cart-arrow-down text-[18px] text-[#9597bf] group-hover:text-white"></i>
              </div>
              <h2 className="text-[16px] ml-4 text-[#9597bf] group-hover:text-white">
                Product
              </h2>
            </div>
            <div className="mr-1">
              <i className="fa fa-angle-right text-[#9597bf] group-hover:text-white relative group-hover:left-2 transition-[left] duration-700"></i>
            </div>
          </div>
          <div className="text-white flex justify-between items-center h-[40px] my-1 px-4 rounded-md cursor-pointer hover:bg-[#2d2d69] group">
            <div className="flex">
              <div className="w-[20px]">
                <i className="fa fa-user-o text-[18px] text-[#9597bf] group-hover:text-white"></i>
              </div>
              <h2 className="text-[16px] ml-4 text-[#9597bf] group-hover:text-white">
                Customer
              </h2>
            </div>
            <div className="mr-1">
              <i className="fa fa-angle-right text-[#9597bf] group-hover:text-white relative group-hover:left-2 transition-[left] duration-700"></i>
            </div>
          </div>
          <div className="text-white flex justify-between items-center h-[40px] my-1 px-4 rounded-md cursor-pointer hover:bg-[#2d2d69] group">
            <div className="flex">
              <div className="w-[20px]">
                <i className="fa fa-credit-card text-[17px] text-[#9597bf] group-hover:text-white"></i>
              </div>
              <h2 className="text-[16px] ml-4 text-[#9597bf] group-hover:text-white">
                Income
              </h2>
            </div>
            <div className="mr-1">
              <i className="fa fa-angle-right text-[#9597bf] group-hover:text-white relative group-hover:left-2 transition-[left] duration-700"></i>
            </div>
          </div>
          <div className="text-white flex justify-between items-center h-[40px] my-1 px-4 rounded-md cursor-pointer hover:bg-[#2d2d69] group">
            <div className="flex">
              <div className="w-[20px]">
                <i className="fa fa-handshake-o text-[17px] text-[#9597bf] group-hover:text-white"></i>
              </div>
              <h2 className="text-[16px] ml-4 text-[#9597bf] group-hover:text-white">
                Promote
              </h2>
            </div>
            <div className="mr-1">
              <i className="fa fa-angle-right text-[#9597bf] group-hover:text-white relative group-hover:left-2 transition-[left] duration-700"></i>
            </div>
          </div>
          <div className="text-white flex justify-between items-center h-[40px] my-1 px-4 rounded-md cursor-pointer hover:bg-[#2d2d69] group">
            <div className="flex">
              <div className="w-[20px]">
                <i className="fa fa-comment-o text-[17px] text-[#9597bf] group-hover:text-white"></i>
              </div>
              <h2 className="text-[16px] ml-4 text-[#9597bf] group-hover:text-white">
                Help
              </h2>
            </div>
            <div className="mr-1">
              <i className="fa fa-angle-right text-[#9597bf] group-hover:text-white relative group-hover:left-2 transition-[left] duration-700"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
