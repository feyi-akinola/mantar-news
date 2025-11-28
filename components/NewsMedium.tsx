import { Squircle } from "corner-smoothing";

const NewsMedium = () => {
  return (
    <Squircle
      cornerRadius={20}
      style={{
        padding: "0.6rem 1rem",
        marginBottom: "2rem",
        width: "100%",
        height: "220px",
        backgroundColor: "#e5e7eb",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <div></div>
    </Squircle>
  );
};

export default NewsMedium;