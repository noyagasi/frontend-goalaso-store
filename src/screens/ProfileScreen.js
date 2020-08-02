import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/userActions';

function ProfileScreen(props) {

    const userSignout = useSelector(state => state.userSignin);
    const { userInfo } = userSignout; 
    const dispatch = useDispatch();

    useEffect(() => {
       if (!userInfo) {
            props.history.push("/");
        }
        return () => {
            //
        };
    }, [userInfo]);
    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch(signout());
    }
    return <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button className="button primary full-width"
            onClick={logoutHandler} >
            Log Out
        </button>
    </div>
}

export default ProfileScreen;