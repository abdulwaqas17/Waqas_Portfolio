// import { useEffect, useRef, useState } from 'react';

// function TrackValue() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count; // har render ke baad prevCount update hota hai
//   }, [count]);

//   return (
//     <div>
//       <p>Current: {count}</p>
//       <p>Previous: {prevCount.current}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// }

// export default TrackValue;