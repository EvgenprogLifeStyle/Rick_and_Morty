import React, {FC} from 'react';
import loadingIcon from './../../assets/images/loading.svg'
const Loading: FC = () => {
    return <div className="d-flex justify-content-center align-items-center" style={{minHeight:" 100vh"}}>
        <img src={loadingIcon} alt="loading"/>
    </div>

};

export default Loading;