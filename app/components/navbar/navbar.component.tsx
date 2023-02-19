import type {Navigation} from "~/models/navigation/navigation.server";
import Icon from "~/components/common/icon/icon.component";
import {Link} from "@remix-run/react";

type NavbarProps = {
    navigation: Navigation[];
};

const Navbar = ({navigation}: NavbarProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-14 h-full bg-zinc-900">
            {navigation.map((nav: Navigation) =>
                <Link key={nav.icon}
                      className="flex items-center justify-center w-10 h-10 m-1 hover:bg-zinc-700 hover:rounded-full"
                      to={nav.url}>
                    <Icon className="w-6 h-6" icon={nav.icon} description={nav.description}></Icon>
                </Link>
            )}
        </div>
    );
}

export default Navbar;