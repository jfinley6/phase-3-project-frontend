import React from "react";

function Chip({ setBetAmount }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        paddingBottom: "10px",
      }}
    >
      <div
        onClick={() => setBetAmount((count) => count + 5)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "50px", height: "50px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png.crdownload"
        />
        <div style={{ position: "absolute", top: "30%", left: "39%" }}><b>5</b></div>
      </div>
      <div
        onClick={() => setBetAmount((count) => count + 10)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "50px", height: "50px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png.crdownload"
        />
        <div style={{ position: "absolute", top: "30%", left: "31%" }}><b>10</b></div>
      </div>
      <div
        onClick={() => setBetAmount((count) => count + 25)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "50px", height: "50px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png.crdownload"
        />
        <div style={{ position: "absolute", top: "30%", left: "29%" }}><b>25</b></div>
      </div>
      <div
        onClick={() => setBetAmount((count) => count + 100)}
        className="pokerChip"
        style={{ position: "relative", textAlign: "center", color: "black" }}
      >
        <img
          style={{ width: "50px", height: "50px" }}
          src="images/dg-designer-0e9d935f147701852434523765510742843.png.crdownload"
        />
        <div style={{ position: "absolute", top: "30%", left: "21%" }}><b>100</b></div>
      </div>
    </div>
  );
}

export default Chip;
