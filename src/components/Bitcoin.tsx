import { useState, useEffect } from "react";

type StringOrNumber = string | number;
export default function Bitcoin() {
  const [bitcoin, setBitcoin] = useState<StringOrNumber>(0);
  // const [oldBitcoin, setOldBitcoin] = useState<StringOrNumber>(0);
  // const [gap, setGap] = useState<boolean>(false);
  useEffect(() => {
    setInterval(() => {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => res.json())
        .then((data) => {
          setBitcoin(data.bpi.EUR.rate_float);
          // bitcoin >= oldBitcoin ? setGap(true) : setGap(false);
          // setOldBitcoin(bitcoin) as unknown as number;
          // oldBitcoin as number;
        });
    }, 1000);
  }, []);
  return (
    <div>
      <h2 className="text-price">
        Le Bitcoin Euro vaut <span>{bitcoin}</span> €
      </h2>
      {/* <h2 className="arrow">{gap ? "⬆️" : "⬇️"}</h2> */}
    </div>
  );
}
