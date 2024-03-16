const CoffeeShop = () => {
  const Beacon = {
    id: "123",
    name: "Beacon Coffee",
    location: "Falmouth",
    address: "28a High Street",
    city: "Falmouth",
    postcode: "TR11 2AD",
    distance: "0.3 miles",
    dogFriendly: true,
    image: "https://via.placeholder.com/150",
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={Beacon.image} alt={Beacon.name} />
      <h2 className="text-3xl font-semibold text-center">Coffee Shop</h2>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold">{Beacon.name}</h2>
        <p className="text-sm">{Beacon.location}</p>
        <p className="text-sm">{Beacon.distance}</p>
      </div>
    </div>
  );
};

export default CoffeeShop;
