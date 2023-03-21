import style from "./Header.module.css"
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Btn = styled(Button)`
  color: #1667b8;
  width: 100px;
  
    &:hover {
        position:relative;
        top: 1px;
    }

`;



function Header(){
    return(
        <>
        <div className={style["block-nav"]}>
            <div className={style["img"]}></div>
            <nav>
                <p>plans</p>
                <p>features</p>
                <Btn>Log in</Btn>
            </nav>
        </div>
        </>
    )
}
export default Header