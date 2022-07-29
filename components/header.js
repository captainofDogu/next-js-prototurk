import Link from "next/link"

export default function Header(){
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Anasayfa</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <style jsx>
                {`
                .header{
                    height:60px;
                    background:#fff;
                    border-bottom:1px solid #ccc ;

                }
                `}
            </style>
        </header>
    )
}