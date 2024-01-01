import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
const BottomRight = () => {
  const iconCount = 4;
  const radius = 150;
  const activeTab = useSelector((state) => state.activeTab);
  const [isIconsVisible, setIsIconsVisible] = useState(false);

  useEffect(() => {
    setIsIconsVisible(activeTab.r === 3 && activeTab.c === 3);
  }, [activeTab]);

  return (
    <div className="relative w-full h-full p-4  overflow-hidden">
      <div className="absolute bottom-20 right-0 flex flex-col items-end bg-green-500">
        <IconsContainer
          iconCount={iconCount}
          radius={radius}
          isVisible={isIconsVisible}
        />
      </div>
    </div>
  );
};

const BottomRightIconList = [
  {
    name: "Time",
    Icon: "./icons/clock.svg",
    TargetLotation: "",
  },
  {
    name: "Time",
    Icon: "./icons/clock.svg",
    TargetLotation: "",
  },
  {
    name: "Time",
    Icon: "./icons/clock.svg",
    TargetLotation: "",
  },
];
const IconsContainer = ({ iconCount, radius, isVisible }) => {
  return BottomRightIconList.map((iconData, index) => (
    <Icon
      key={index}
      angle={(90 / (BottomRightIconList.length - 1)) * index}
      radius={radius}
      isVisible={isVisible}
      delay={index * 0.001}
      icon={iconData.icon}
      name={iconData.name}
      targetRotation={iconData.targetRotation}
    />
  ));
};
function Icon({ name, icon, angle, radius, isVisible, delay, targetRotation }) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const x = radius * Math.cos(((270 - angle) * Math.PI) / 180);
  const y = radius * Math.sin(((270 - angle) * Math.PI) / 180);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isVisible) {
      controls.start({
        x: x,
        y: y,
        opacity: 1,
        scale: 1,
        rotate: targetRotation, // Add rotation property
        transition: { delay },
      });
    } else {
      controls.start({ x: 300, y: 300, opacity: 0, scale: 0, rotate: 0 });
    }
  }, [isVisible, controls, x, y, delay, targetRotation]);

  return (
    <motion.div
      className="bg-red-400 rounded-full p-2 w-20 h-20"
      style={{
        position: "absolute",
        transform: `translate(${x}px, ${y}px)`,
        overflow: "hidden",
      }}
      animate={controls}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <img src={icon} alt={name} />
      {/* {isHovered && <div className="text-white">{name}</div>} */}
    </motion.div>
  );
}

export default BottomRight;
