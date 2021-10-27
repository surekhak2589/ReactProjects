import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import BackDrop from '../../UI/Backdrop/Backdrop'

const sideDrawer=(props)=>{
    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];
    }
    return(
        <>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}> {/*We cannot pass an array here,so passing a single string using join*/}
      
               <Logo height="11%"/>            
            
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </>
    );
}


export default sideDrawer;