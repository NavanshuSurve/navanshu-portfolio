import ASCIIText from './ASCIIText';
function AnimateASCII(props){

    return(<>
    <ASCIIText
  text={props.content}
  enableWaves={true}
  asciiFontSize={8}
/>
</>)
}
export default AnimateASCII;
