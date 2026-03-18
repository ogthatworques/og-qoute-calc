import React, { useMemo, useState } from "react";

export default function App() {
  const [service, setService] = useState("full");
  const [condition, setCondition] = useState("moderate");
  const [truck, setTruck] = useState("sleeper");
  const [addons, setAddons] = useState([]);

  const prices = {
    basic: 180,
    interior: 240,
    full: 400,
    heavy: 550,
  };

  const conditionPrices = {
    light: 0,
    moderate: 50,
    heavy: 150,
  };

  const truckPrices = {
    daycab: 0,
    sleeper: 75,
  };

  const addonPrices = {
    engine: 75,
    degrease: 50,
    odor: 50,
  };

  const toggleAddon = (id) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const total = useMemo(() => {
    let sum = prices[service];
    sum += conditionPrices[condition];
    sum += truckPrices[truck];

    addons.forEach((a) => {
      sum += addonPrices[a];
    });

    return sum;
  }, [service, condition, truck, addons]);

  const buttonStyle = (active) => ({
    padding: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    border: "none",
    backgroundColor: active ? "#f97316" : "#333",
    color: "white",
    cursor: "pointer",
  });

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", padding: "20px" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>

        <h1 style={{ textAlign: "center" }}>OGthatWorques Calculator</h1>

        {/* TOTAL */}
        <div style={{
          background: "#111",
          padding: "15px",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "20px"
        }}>
          <div style={{ color: "#aaa" }}>Estimated Total</div>
          <div style={{ fontSize: "28px", fontWeight: "bold" }}>${total}</div>
        </div>

        {/* SERVICE */}
        <div>
          <h3>Service</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button onClick={() => setService("basic")} style={buttonStyle(service==="basic")}>Basic</button>
            <button onClick={() => setService("interior")} style={buttonStyle(service==="interior")}>Interior</button>
            <button onClick={() => setService("full")} style={buttonStyle(service==="full")}>Full</button>
            <button onClick={() => setService("heavy")} style={buttonStyle(service==="heavy")}>Heavy</button>
          </div>
        </div>

        {/* CONDITION */}
        <div>
          <h3>Condition</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            <button onClick={() => setCondition("light")} style={buttonStyle(condition==="light")}>Light</button>
            <button onClick={() => setCondition("moderate")} style={buttonStyle(condition==="moderate")}>Moderate</button>
            <button onClick={() => setCondition("heavy")} style={buttonStyle(condition==="heavy")}>Heavy</button>
          </div>
        </div>

        {/* TRUCK */}
        <div>
          <h3>Truck Type</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button onClick={() => setTruck("daycab")} style={buttonStyle(truck==="daycab")}>Day Cab</button>
            <button onClick={() => setTruck("sleeper")} style={buttonStyle(truck==="sleeper")}>Sleeper</button>
          </div>
        </div>

        {/* ADDONS */}
        <div>
          <h3>Add-Ons</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <button onClick={() => toggleAddon("engine")} style={buttonStyle(addons.includes("engine"))}>
              Engine Bay
            </button>
            <button onClick={() => toggleAddon("degrease")} style={buttonStyle(addons.includes("degrease"))}>
              Degrease
            </button>
            <button onClick={() => toggleAddon("odor")} style={buttonStyle(addons.includes("odor"))}>
              Odor Removal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
