import React, { useCallback } from "react";

const styles = {
  width: "200px",
  height: "20px",
  marginBottom: "20px",
};
interface Props {
  setUserInput: (value: string) => void;
}

const SearchInput: React.FC<Props> = ({ setUserInput }) => {
  const handleChange = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setUserInput(value);
    },
    [setUserInput]
  );

  return (
    <input
      placeholder="Search..."
      type="text"
      onKeyUp={handleChange}
      style={styles}
    />
  );
};

export default SearchInput;
