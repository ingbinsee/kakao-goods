import {Link} from 'react-router-dom';

function Heading() {
  return (
    <h1 className="bg-black text-white w-[150px] text-center font-semibold mx-auto my-6 rounded-xl">
      <Link to="/" className="block">KAKAO FRIENDS</Link>
    </h1>
  );
}

export default Heading;
