import React from "react";

const Footer = () => {
  return (
    <div className="py-10 flex justify-center text-gray-200 font-medium text-lg">
      <a href="https://www.buymecoffee.com/sirbor"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
      </a>
      <p>Developed by
        <a href="https://github.com/sirbor" target="_blank" className="underline txt-green ml-1">
          Dominic Bor
        </a> </p>

    </div>
  );
};

export default Footer;
