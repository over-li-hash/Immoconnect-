export default function ListingCard({ listing }) {
  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold">{listing.title}</h2>
      <p>{listing.location}</p>
      <p>{listing.price} FCFA</p>
      {listing.agent?.verified && (
        <span className="text-green-600">✔ Agent vérifié</span>
      )}
    </div>
  );
}
