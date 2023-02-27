import Link from "next/link";
import {
    blogItems,
    candidateItems,
    employerItems,
    findJobItems,
    homeItems,
    pageItems,
    shopItems,
} from "../../data/mainMenuData";
import {
    isActiveParent,
    isActiveLink,
    isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
    const router = useRouter();

    return (
        <>
            <nav className="nav main-menu">
                <ul className="navigation" id="navbar">
                    {/* current dropdown */}
                  
                    <li>
                    <Link href="#">
                    Home</Link>
                     
                    </li>

                    <li>
                    <Link href="/candidates">
                    Cerca Candidato</Link>
                     
                    </li>
                    <li>
                    <Link href="/jobs">
                    Cerca Lavoro</Link>
                     
                    </li>
                    <li>
                    <Link href="/contatti">
                    Contatti</Link>
                     
                    </li>
                    <li>
                    <Link href="/chi-siamo">
                    Chi Siamo</Link>
                     
                    </li>
                  

                    <li
                        className={`${
                            isActiveParentChaild(pageItems, router.asPath) ||
                            isActiveParentChaild(
                                shopItems[0].items,
                                router.asPath
                            )
                                ? "current "
                                : ""
                        } dropdown`}
                    >
                        <span>Altro</span>
                        <ul>
                            {shopItems.map((item) => (
                                <li className="dropdown" key={item.id}>
                                    <span
                                        className={`${
                                            isActiveParentChaild(
                                                shopItems[0].items,
                                                router.asPath
                                            )
                                                ? "current "
                                                : ""
                                        }`}
                                    >
                                        {item.title}
                                    </span>
                                    <ul>
                                        {item.items.map((menu, i) => (
                                            <li
                                                className={
                                                    isActiveLink(
                                                        menu.routePath,
                                                        router.asPath
                                                    )
                                                        ? "current"
                                                        : ""
                                                }
                                                key={i}
                                            >
                                                <Link href={menu.routePath}>
                                                    {menu.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            {pageItems.map((item, i) => (
                                <li
                                    className={
                                        isActiveLink(
                                            item.routePath,
                                            router.asPath
                                        )
                                            ? "current"
                                            : ""
                                    }
                                    key={i}
                                >
                                    <Link href={item.routePath}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    {/* End Pages menu items */}
                </ul>
            </nav>
        </>
    );
};

export default HeaderNavContent;
