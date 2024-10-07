import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

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


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="Logo" />

            {user &&
                (<div className="flex p-2">
                    <img className="w-8 h-8 m-4" src={user?.photoURL} alt="userIcon" />
                    <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
                </div>)
            }
        </div>
    )
}

export default Header
