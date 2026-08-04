import FilterList from "./filterList";

function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        flexDirection: "column",
      }}
    >
      <FilterList title={"Condition"} options={["New", "Renewed", "Used"]} />
      <FilterList
        title={"Material"}
        options={["plastic", "Rubber", "Metal", "Wood", "Glass"]}
      />
      <FilterList
        title={"Uses"}
        options={[
          "Exercise",
          "Boxing",
          "Running",
          "Cycling",
          "Swimming",
          "Hiking",
        ]}
      />
      <FilterList
        title={"Brands"}
        options={["Nike", "Adidas", "Reebok", "Puma", "Asics", "Re0k"]}
      />
    </div>
  );
}

export default SideBar;
