import React, { useState, useEffect, useCallback } from "react";

const mockData = {
  types: [
    { type: "20", label: "20% 할인" },
    { type: "10", label: "10% 할인" },
    { type: "1+1", label: "1+1" },
  ],
  items: {
    20: [
      {
        title:
          "20% 할인 상품 1 - 긴 상품명 테스트 데이터, 긴 상품명 테스트 데이터",
        description:
          "긴 상품명 테스트 데이터 설명 1, 긴 상품명 테스트 데이터 설명 1, 긴 상품명 테스트 데이터 설명 1, 긴 상품명 테스트 데이터 설명 1",
      },
      { title: "20% 할인 상품 2", description: "설명 2" },
    ],
    10: [
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 2", description: "설명 2" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
      { title: "10% 할인 상품 1", description: "설명 1" },
    ],
    "1+1": [
      { title: "1+1 상품 1", description: "설명 1" },
      { title: "1+1 상품 2", description: "설명 2" },
    ],
  },
};

const LandingPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [items, setItems] = useState([]);
  const [types, setTypes] = useState([]);

  // Scroll to top button
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (selectedButton) {
      fetchItems(selectedButton);
    }
  }, [selectedButton]);

  const fetchData = useCallback(async () => {
    try {
      // const response = await axios.get('/api/data');
      const data = mockData;
      setTypes(data.types);
      setItems(data.items[selectedButton] || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [selectedButton]);

  const fetchItems = async (type) => {
    const data = mockData.items[type];
    setItems(data);
  };

  const handleButtonClick = (type) => {
    setSelectedButton(type);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="flex justify-around mb-4 sticky">
          {types.map((item) => (
            <button
              key={item.type}
              className={`px-4 py-2 rounded ${
                selectedButton === item.type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleButtonClick(item.type)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-screen "
            >
              <img
                className="object-cover w-full rounded-t-lg md:h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/docs/images/blog/image-4.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 md:text-2xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-primary p-3 text-xs font-medium uppercase leading-tight text-white shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg"
        >
          <span className="[&>svg]:w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </span>
        </button>
      )}
    </>
  );
};
export default LandingPage;
