import{Main, Nomes,Copy} from "./style"; 
import fotoElisabeth from '../../assets/img/Elisabeth1.jpg';
import fotoCamila from '../../assets/img/Camila.jpg';
 
export function Footer() {
    return (
      <Main>
        <Nomes> Elisabeth </Nomes>
        <Nomes>Camila</Nomes>
        <Copy>
          &copy; Copyright <strong><span>Elisabeth & Camila</span></strong>. All Rights Reserved
        </Copy>
      </Main>
    );
  }
