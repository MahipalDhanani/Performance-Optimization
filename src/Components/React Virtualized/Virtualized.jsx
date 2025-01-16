import React from "react";
// import { List } from "react-virtualized";
import "react-virtualized/styles.css"; // Import default styles for react-virtualized


function Virtualized() {
  // Create a large list of items
  const largeList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  // Renderer for each row
  const rowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        {largeList[index]}
      </div>
    );
  };

  return (
    <div>
      <h1>React Virtualized Example</h1>
      {/* <List
        width={600} // Width of the list container
        height={400} // Height of the list container
        rowHeight={30} // Height of each row
        rowCount={largeList.length} // Total number of rows
        rowRenderer={rowRenderer} // Function to render each row
      /> */}
    </div>
  );
}

export default Virtualized;
