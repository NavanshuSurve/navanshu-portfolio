import { useRef } from 'react';
import Crosshair from './Crosshair';

const Cursor = () => {
const containerRef = useRef(null);

return (
  <div ref={containerRef} style={{ height: '300px', overflow: 'hidden' }}>
    <Crosshair color='#08f408ff'/> 
  </div>
)
};
export default Cursor;
