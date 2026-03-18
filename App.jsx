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

  const button = (active) =>
    `p-3 rounded-xl font-bold ${active ? "bg-orange-500" : "bg-gray-800"}`;

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto space-y-5">
        <h1 className="text-2xl font-bold text-center">
          OGthatWorques Calculator
        </h1>

        <div className="bg-gray-900 p-4 rounded-xl text-center">
          <div className="text-gray-400">Estimated Total</div>
          <div className="text-3xl font-bold">${total}</div>
        </div>

        <div>
          <h2 className="mb-2 font-bold">Service</h2>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => setService("basic")} className={button(service === "basic")}>Basic</button>
            <button onClick={() => setService("interior")} className={button(service === "interior")}>Interior</button>
            <button onClick={() => setService("full")} className={button(service === "full")}>Full</button>
            <button onClick={() => setService("heavy")} className={button(service === "heavy")}>Heavy</button>
          </div>
        </div>

        <div>
          <h2 className="mb-2 font-bold">Condition</h2>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => setCondition("light")} className={button(condition === "light")}>Light</button>
            <button onClick={() => setCondition("moderate")} className={button(condition === "moderate")}>Moderate</button>
            <button onClick={() => setCondition("heavy")} className={button(condition === "heavy")}>Heavy</button>
          </div>
        </div>

        <div>
          <h2 className="mb-2 font-bold">Truck Type</h2>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => setTruck("daycab")} className={button(truck === "daycab")}>Day Cab</button>
            <button onClick={() => setTruck("sleeper")} className={button(truck === "sleeper")}>Sleeper</button>
          </div>
        </div>

        <div>
          <h2 className="mb-2 font-bold">Add-Ons</h2>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => toggleAddon("engine")} className={button(addons.includes("engine"))}>
              Engine Bay
            </button>
            <button onClick={() => toggleAddon("degrease")} className={button(addons.includes("degrease"))}>
              Degrease
            </button>
            <button onClick={() => toggleAddon("odor")} className={button(addons.includes("odor"))}>
              Odor Removal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
