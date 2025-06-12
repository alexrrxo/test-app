import { Dispatch, SetStateAction } from "react";

type Props = {
  colors: string[];
  selectedColor: string;
  onChangeSelectedColor: Dispatch<SetStateAction<string>>;
};

export const ColorSelector: React.FC<Props> = ({
  colors,
  selectedColor,
  onChangeSelectedColor,
}) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        {colors.map(color => (
          <button
            key={color}
            onClick={() => onChangeSelectedColor(color)}
            style={{
              padding: "8px 12px",
              border: selectedColor === color ? "2px solid black" : "1px solid lightgray",
              background: "white",
              cursor: "pointer",
            }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};
