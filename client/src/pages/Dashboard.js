import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Dashboard = ({ history }) => {
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
    }, [dispatch, userInfo, history])
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
