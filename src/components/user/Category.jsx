import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Category = () => {
  const category = [
    {
      category_id: uuidv4(),
      category_name: "Thời sự",
      category_link: "thoi-su",
      category_item: [
        {
          item_id: uuidv4(),
          item_name: "Chính trị",
          item_link: "chinh-tri",
        },
        {
          item_id: uuidv4(),
          item_name: "Dân sinh",
          item_link: "dan-sinh",
        },
      ],
    },
    {
      category_id: uuidv4(),
      category_name: "Góc nhìn",
    },
    {
      category_id: uuidv4(),
      category_name: "Thế giới",
    },
    {
      category_id: uuidv4(),
      category_name: "Video",
    },
    {
      category_id: uuidv4(),
      category_name: "Poscasds",
    },
    {
      category_id: uuidv4(),
      category_name: "Kinh doanh",
    },
    {
      category_id: uuidv4(),
      category_name: "Bất động sản",
    },
    {
      category_id: uuidv4(),
      category_name: "Khoa học",
    },
    {
      category_id: uuidv4(),
      category_name: "Giải trí",
    },
    {
      category_id: uuidv4(),
      category_name: "Thể thao",
    },
    {
      category_id: uuidv4(),
      category_name: "Pháp luật",
    },
    {
      category_id: uuidv4(),
      category_name: "Giáo dục",
    },
    {
      category_id: uuidv4(),
      category_name: "Sức khoẻ",
    },
    {
      category_id: uuidv4(),
      category_name: "Đời sống",
    },
    {
      category_id: uuidv4(),
      category_name: "Du lịch",
    },
    {
      category_id: uuidv4(),
      category_name: "Số hoá",
    },
    {
      category_id: uuidv4(),
      category_name: "Xe",
    },
    {
      category_id: uuidv4(),
      category_name: "Ý kiến",
    },
    {
      category_id: uuidv4(),
      category_name: "Tâm sự",
    },
    {
      category_id: uuidv4(),
      category_name: "Thư giãn",
    },
  ];
  return (
    <>
      <nav className="w-full h-[50px] ">
        <div className="flex justify-between items-center px-[15px] max-w-[1440px] mx-auto">
          <NavLink
            to="/"
            className="relative me-3 p-2 text-[#222222] hover:text-[#b52758]"
          >
            <HomeOutlined className="mb-2" />
          </NavLink>
          {category.map((cate) => (
            <>
              <NavLink
                to={cate.category_link}
                key={cate.category_id}
                className="group relative py-4 me-3 text-[#222222] text-sm hover:text-[#b52758]"
              >
                {cate.category_name}
                <div className="hidden group-hover:flex flex-col py-2 w-[190px] shadow-lg border-t border-[#b52758] bg-white absolute left-0 top-[100%] ">
                  {cate.category_item?.map((item) => (
                    <NavLink
                      to={item.item_link}
                      key={item.item_id}
                      className="border-t ps-2 py-2  hover:text-[#b52758] text-[#222222] text-sm "
                    >
                      {item.item_name}
                    </NavLink>
                  ))}
                </div>
              </NavLink>
            </>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Category;
