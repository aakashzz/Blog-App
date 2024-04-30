import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
function Protected({children , authentication = true}) {
    const navigate = useNavigate('/');
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state)=> state.auth.status);

    useEffect(()=>{
        //one more condition expression
        // if(authStatus === true){
        //     navigate('/');
        // }
        // else if(authStatus === false){
        //     navigate('/login')
        // }
        if (authentication && authStatus !== authentication ) {
                navigate('/login')
        }else if(!authentication && authStatus !== authentication ){
            navigate('/')
        }
        setLoading(false)

    },[authStatus, navigate, authentication])
  return loading ? <h1>Loading....</h1> : <>{children}</>
}

export default Protected
