import { useQuery, gql } from '@apollo/client';
import Link from './Link';

const FEED_QUERY = gql`
  {
    feed {
      count
      links {
        id
        url
        description
      }
    }
  }
`;

export default function LinksList() {
  const { data, loading } = useQuery(FEED_QUERY);

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 0)}</pre> */}
      {!loading && data.feed.links.map((link) => <Link key={link.id} link={link}></Link>)}
    </div>
  );
}
