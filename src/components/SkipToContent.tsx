import React from "react";

const SkipToContent = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="absolute -left-full top-auto h-[1px] w-[1px] btn btn-primary focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:w-auto focus:h-auto focus:p-4 focus:rounded-lg"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
