import React from "react";

function BadgeContainer({ discountPercentage, message }) {
  return (
    <div className="a-section a-spacing-micro _deals-shoveler-v2_style_badgeContainer__NehI_">
      <div className="a-section a-spacing-mini">
        <div className="_deals-shoveler-v2_style_badgeContainer__2F-_x" data-component="dui-badge">
          <div style={{ backgroundColor: "#CC0C39", color: "#ffffff",width:"30%" }} className="_deals-shoveler-v2_style_badgeLabel__rzdVa">
            <span className="a-size-mini">Up to </span>
            <span className="a-size-mini">{discountPercentage}</span>
            <span className="a-size-mini">% off</span>
          </div>
          <div style={{ backgroundColor: "#ffffff", color: "#CC0C39",  }} className="_deals-shoveler-v2_style_badgeMessage__uSPzQ">
            <span className="a-size-mini">{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeContainer;
