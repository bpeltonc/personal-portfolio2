import "./NavElement.css"

type Props = {
    title: string;
    dark: boolean;
}

const NavElement: React.FC<Props> = ({title, dark}) => {
    return <div style={dark ? {color: "white"} : {color: "black"} } className="nav-element">{title}</div>
}

export default NavElement;