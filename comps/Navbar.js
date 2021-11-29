import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <nav>
            <div class="logo">
                <h1>Picky Picky Picky</h1>
            </div>
            <div>
                <Link href="/"><a className={ styles.menuItem }>Home</a></Link>
                <Link href="/vendors/"><a>Vendors</a></Link>
                <Link href="/colors/"><a>Colors</a></Link>
                <Link href="/import"><a>Importer</a></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;