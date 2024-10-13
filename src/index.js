import React, { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaHeart,
  FaRegHeart,
  FaThumbsUp,
  FaRegThumbsUp,
  FaRegSadTear,
  FaRegMeh,
  FaRegSmile,
  FaRegLaugh,
} from "react-icons/fa";
import PropTypes from "prop-types";

const Rating = ({
  maxRating = 5,
  onRate,
  value,
  readOnly = false,
  disabled = false,
  size = "md",
  defaultColor = "#ffc107",
  activeColor,
  showNoRatingGiven = false,
  disabledOpacity = 0.5,
  resettable = false,
  tooltip = [],
  iconType = "stars",
  ariaLabel = "rating",
  showValue = false,
}) => {
  const [internalRating, setInternalRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const rating = value !== undefined ? value : internalRating;

  const handleClick = (newValue) => {
    if (!readOnly && !disabled) {
      const updatedRating = resettable && newValue === rating ? 0 : newValue;
      setInternalRating(updatedRating);
      onRate?.(updatedRating);
    }
  };

  const handleKeyDown = (event, index) => {
    if (!readOnly && !disabled) {
      const keyMap = {
        ArrowRight: () => index < maxRating && handleClick(index + 1),
        ArrowLeft: () => index > 1 && handleClick(index - 1),
        Enter: () => handleClick(index),
        " ": () => handleClick(index),
      };
      keyMap[event.key]?.();
    }
  };

  const getSizeStyle = () => {
    const sizes = {
      sm: "1.5rem",
      md: "2rem",
      lg: "3rem",
    };
    return sizes[size] || sizes.md;
  };

  const getFaceColor = (i) => {
    const colors = ["#e57373", "#ffb74d", "#fff176", "#aed581", "#4caf50"];
    return i <= Math.ceil(hoverRating || rating) ? colors[i - 1] : "#bdbdbd";
  };

  const getIcon = (i) => {
    const filled = i <= Math.floor(hoverRating || rating);

    if (iconType === "hearts") return filled ? <FaHeart /> : <FaRegHeart />;
    if (iconType === "thumbs")
      return filled ? <FaThumbsUp /> : <FaRegThumbsUp />;
    if (iconType === "faces") {
      const faces = [
        <FaRegSadTear />,
        <FaRegMeh />,
        <FaRegSmile />,
        <FaRegSmile />,
        <FaRegLaugh />,
      ];
      return faces[i - 1] || <FaRegMeh />;
    }
    return filled ? <FaStar /> : <FaRegStar />;
  };

  const getIconStyle = (i) => ({
    cursor: readOnly || disabled ? "not-allowed" : "pointer",
    fontSize: getSizeStyle(),
    color:
      iconType === "faces"
        ? getFaceColor(i)
        : i <= Math.floor(hoverRating || rating)
          ? activeColor || defaultColor
          : "#e4e5e9",
    opacity: disabled ? disabledOpacity : 1,
    marginRight: "0.5rem",
    display: "inline-block",
    transition: "transform 0.2s, color 0.2s",
    transform: i <= hoverRating ? "scale(1.2)" : "scale(1)",
  });

  const handleMouseMove = (index) => {
    if (!disabled) {
      setHoverRating(index);
    }
  };

  const renderStars = () => {
    if (showNoRatingGiven && rating === 0) return <span>No rating given</span>;

    return Array.from({ length: maxRating }, (_, i) => {
      const index = i + 1;
      return (
        <span
          key={index}
          style={getIconStyle(index)}
          onClick={() => !disabled && handleClick(index)}
          onMouseEnter={() => !disabled && handleMouseMove(index)}
          onMouseLeave={() => !disabled && setHoverRating(0)}
          onKeyDown={(e) => !disabled && handleKeyDown(e, index)}
          tabIndex={readOnly || disabled ? -1 : 0}
          aria-label={`${index} of ${maxRating} ${ariaLabel}`}
          role="button"
        >
          {getIcon(index)}
          {tooltip[index - 1] && hoverRating === index && (
            <span
              className="tooltip"
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: activeColor || defaultColor,
                color: "#fff",
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                fontSize: "0.75rem",
                whiteSpace: "nowrap",
                marginTop: "0.25rem",
              }}
            >
              {tooltip[index - 1]}
            </span>
          )}
        </span>
      );
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        aria-live="polite"
        aria-label={`${rating} of ${maxRating} ${ariaLabel}`}
        style={{ display: "inline-flex" }}
      >
        {renderStars()}
      </div>
      {resettable && !readOnly && !disabled && (
        <button
          onClick={() => handleClick(0)}
          style={{ marginLeft: "1rem", cursor: "pointer", opacity: 0.8 }}
        >
          Reset
        </button>
      )}
      {showValue && (
        <span
          style={{
            marginLeft: "1rem",
            fontSize: "1rem",
            color: activeColor || defaultColor,
          }}
        >
          {rating} / {maxRating}
        </span>
      )}
    </div>
  );
};

Rating.propTypes = {
  maxRating: PropTypes.number,
  onRate: PropTypes.func,
  value: PropTypes.number,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  defaultColor: PropTypes.string,
  activeColor: PropTypes.string,
  showNoRatingGiven: PropTypes.bool,
  disabledOpacity: PropTypes.number,
  resettable: PropTypes.bool,
  tooltip: PropTypes.arrayOf(PropTypes.string),
  iconType: PropTypes.oneOf(["stars", "hearts", "thumbs", "faces"]),
  ariaLabel: PropTypes.string,
  showValue: PropTypes.bool,
};

export default Rating;
