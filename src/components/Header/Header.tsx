import './Header.css'

type Props = {
    title: string;
    subtitle?: string;
    color: string;
}


const Header: React.FC<Props> = ({title, subtitle, color}) => {
    return (
    <header className='container'>
        <h1 style={{color: color}}>
            {title}
        </h1>
        {!!subtitle && <h3>
            {subtitle}
        </h3>}
    </header>
    )
}

export default Header;