import '../css/menu.css'

export default function Menu(props) {
  
  return (
     // Menu --
     <div>
     <div className={`${props.isActive?'menu target center change':'menu target center'}`}/*"menu target center"*/ onClick={props.toggle}>
     <div className="menu-line menu-line-1"></div>
     <div className="menu-line menu-line-2"></div>
     </div>
     </div>
   //-- End of Menu ---
  )
}
