import ListingCard from './ListingCard';

const ListingList = ({ listings }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {listings.length > 0 ? (
        listings.map((listing) => (
          <ListingCard listing={listing} key={listing.id} />
        ))
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  );
};

export default ListingList;
