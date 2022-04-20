import "./NavElement.css"

type Props = {
    title: string;
}

const NavElement: React.FC<Props> = ({title}) => {
    return <div className="nav-element">{title}</div>
}

export default NavElement;