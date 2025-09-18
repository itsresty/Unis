
import { cn } from '@/lib/utils';

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#services" },
];

export const Navbar = () => {
    return (
        <nav className="flex items-center pt-5" >
            <div className="container flex items-center justify-between py-4">
                
                    <a 
                className="text-2xl font-bold flex items-center gap-2" 
                href="#home" >
                    <span className="relative">
                    <span>Resty</span>
                    Montero
                    </span>
                </a>
                
                

                {/* Desktop Nav*/}
                <div className=" hidden md:flex items-center gap-5">
                    {navItems.map((item, key ) => (
                        <a 
                        key={key} 
                        href={item.href}>
                        {item.name}
                        </a>
                    ))} 
                </div>

                {/* Mobile Nav*/}
                <div className={cn(
                    "hidden "
                )}>
                    <div className=" flex item center gap-5">
                    {navItems.map((item, key ) => (
                        <a 
                        key={key} 
                        href={item.href}>
                        {item.name}
                        </a>
                    ))} 
                </div>
                </div>
                

            </div>
            
            
        </nav>
    )
}