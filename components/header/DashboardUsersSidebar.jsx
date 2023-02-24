import Link from "next/link";
import usersMenuData from "../../data/usersMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { menuToggle } from "../../features/toggle/toggleSlice";

const DashboardUsersSidebar = () => {
    const router = useRouter();
    const { menu } = useSelector((state) => state.toggle);

    const dispatch = useDispatch();
    // menu togggle handler
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };

    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            {/* Start sidebar close icon */}
            <div className="pro-header text-end pb-0 mb-0 show-1023">
                <div className="fix-icon" onClick={menuToggleHandler}>
                    <span className="flaticon-close"></span>
                </div>
            </div>
            {/* End sidebar close icon */}

            <div className="sidebar-inner">
                <ul className="navigation">
                    {usersMenuData.map((item) => (
                        <li
                            className={`${
                                isActiveLink(item.routePath, router.asPath)
                                    ? "active"
                                    : ""
                            } mb-1`}
                            key={item.id}
                            onClick={menuToggleHandler}
                        >   
                            <Link href={item.routePath}>
                                <i className={`la ${item.icon}`}></i>{" "}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    {
                        <li
                        className={`${
                            isActiveLink('/area-privata/users-profile/' + window.sessionStorage.getItem("token"), router.asPath)
                                ? "active"
                                : ""
                        } mb-1`}
                        key={5}
                        onClick={menuToggleHandler}
                    >   
                        <Link href={'/area-privata/users-profile/' + window.sessionStorage.getItem("token")}>
                            <i className={`la la-user-tie`}></i>{" "}
                            {"Account"}
                        </Link>
                    </li>
                    }



                </ul>
            </div>
        </div>
    );
};

export default DashboardUsersSidebar;
