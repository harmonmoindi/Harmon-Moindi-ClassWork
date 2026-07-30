function ItemCard() {
  const description =
    "A jump rope is a versatile tool used for cardiovascular exercise, agility training, and childhood games, requiring a person to leap consecutively as the cord rotates underfoot and overhead";
  const amount = "Kes 2000";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "2px solid rgba(0,0,0,0.2)",
        padding: "2px 4px 2px 4px",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          width={"200px"}
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVHUhRx_2QTM8CaZg1MnBqnWQJTDkfst2EU2LhEn9zzWIzVqRJp80-0o7AoV7pu0_SnnmAlZrPQ6-wz3l-Dda8m7oOUR9yWNeryF4BijjYbK7iI8WOgQaHoNSt-mq2wzdxGbndplZCiew&usqp=CAc"
        />
      </div>
      <div style={{ textAlign: "left", fontSize: "10px" }}>{description}</div>
      <div style={{ fontSize: "20px" }}>{amount}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            border: "2px solid rgba(0,0,0,0.1)",
            padding: "2px 4px 2px 4px",
            color: "white",
            backgroundColor: "orange",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
