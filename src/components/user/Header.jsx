import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.svg";
import { formatDate } from "../../utils/formatDate";
import {
  BellOutlined,
  DownOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  const nowDate = formatDate();

  return (
    <>
      <header className="h-[50px]">
        <div className="flex items-center justify-between max-w-[1130px] mx-auto px-[15px] ">
          <div className="flex items-center">
            <img src={logo} className="h-[47px]" alt="" />
            <span className="text-[#757575] text-sm ps-[15px] ms-[15px] border-s border-[#e5e5e5]">
              {nowDate}
            </span>
            <span className="cursor-pointer text-sm flex items-center gap-1 ps-[15px] ms-[15px] border-s border-[#e5e5e5] text-[#757575]">
              Hà Nội <DownOutlined className="" />
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-[#757575] text-sm pe-[15px] me-[15px] border-e border-[#e5e5e5]">
              Mới nhất
            </span>
            <span className="text-[#757575] text-sm pe-[15px] me-[15px] border-e border-[#e5e5e5]">
              Tin theo khu vực
            </span>
            <span className="text-[#757575] text-sm pe-[15px] me-[15px] border-e border-[#e5e5e5]">
              International
            </span>
            <SearchOutlined className="text-[#757575] text-lg flex items-center pe-[15px]" />
            <UserOutlined className="text-[#757575] text-lg flex items-center " />
            <button className="text-[#545454] font-semibold text-sm px-[12px]">
              Đăng nhập
            </button>
            <BellOutlined className="text-[#757575] text-lg flex items-center" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
