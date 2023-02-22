import images from '../../assets/images';
import './Header.scss'
function Header() {
    return (
        <>
            <header>
                <div className="header">
                    <div className="header-left">
                        <img src={images.logo} alt="logo Hl assignment" />
                    </div>
                    <div className="header-right">
                        <img src={images.account} alt="account Hl assignment" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;