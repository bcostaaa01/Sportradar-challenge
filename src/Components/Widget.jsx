import React, { useState, useEffect } from "react";

export const Widget = () => {
  const url =
    "https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/fixtures_tournament/19/2021";

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setData(jsonResponse);
    };
    fetchData();

    console.log(data);
  }, []);
  if (!data) return null;

  return (
    <div className="data">
      <h1>Data about the matches</h1>
      {data &&
        data.doc.map((event) => {
          return <div>{JSON.stringify(event.data)}</div>;
        })}
    </div>
  );
};

export default Widget;
