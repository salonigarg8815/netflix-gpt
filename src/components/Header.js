import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from '../utils/configSlice'
import { USER_AVATAR } from '../utils/constants'



const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                navigate("/error")
            });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")

            }
        });

        // UnSubscribe when my componet is unmount
        return () => unsubscribe();

    }, [])

    const handleGptSearchClick = () => {
        // Toggle GPT search button
        dispatch(toggleGptSearchView())

    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Logo" />

            {user &&
                (<div className="flex p-2">
                    {showGptSearch && (
                        <select className="px-4 m-4 bg-gray-900 text-white " onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGES.map((lang) => <option
                                key={lang.identifier}
                                value={lang.identifier} >{lang.name}</option>)}
                        </select>
                    )}

                    <button className=" px-4 m-4 bg-purple-800 text-white rounded-lg"
                        onClick={handleGptSearchClick}>
                        {showGptSearch ? "Home" : "GPT Search"}
                    </button>

                    <img className="rounded-lg w-8 h-8 m-4" src={USER_AVATAR} alt="userIcon" />

                    <button onClick={handleSignOut} className="font-bold text-white bg-red-800 px-4 m-4 rounded-lg">Sign Out</button>
                </div>)
            }
        </div>
    )
}

export default Header
