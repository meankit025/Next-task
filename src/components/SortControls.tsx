interface SortControlsProps {
  sortKey: "name" | "capital" | "population";
  ascending: boolean;
  onSortChange: (
    key: "name" | "capital" | "population",
    ascending: boolean
  ) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortKey,
  ascending,
  onSortChange,
}) => {
  return (
    <div className="sort-controls" style={{ margin: "10px", gap: "20px" }}>
      <button onClick={() => onSortChange("name", !ascending)}>
        Sort by Name {sortKey === "name" && (ascending ? "↑" : "↓")}
      </button>
      <button onClick={() => onSortChange("capital", !ascending)}>
        Sort by Capital {sortKey === "capital" && (ascending ? "↑" : "↓")}
      </button>
      <button onClick={() => onSortChange("population", !ascending)}>
        Sort by Population {sortKey === "population" && (ascending ? "↑" : "↓")}
      </button>
    </div>
  );
};

export default SortControls;
