interface Props{
    className: string
}

export default function Menu({className}: Props){
    return(<nav className={className}>
        <ul className="list-none space-x-10 font-[600]">
            <li className="inline-block cursor-pointer">Home page</li>
            <li className="inline-block cursor-pointer">Product</li>
            <li className="inline-block cursor-pointer">Option</li>
            <li className="inline-block cursor-pointer">New</li>
            <li className="inline-block cursor-pointer">Blog</li>
            <li className="inline-block cursor-pointer">About us</li>
        </ul>
       </nav>)
}