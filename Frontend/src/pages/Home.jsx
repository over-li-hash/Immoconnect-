import { useEffect, useState } from "react";
import api from "../services/api";
import ListingCard from "../components/ListingCard";

export default function Home() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    api.get("/listings").then(res => setListings(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-3 gap-4">
      {listings.map(l => (
        <ListingCard key={l._id} listing={l} />
      ))}
    </div>
  );
}
