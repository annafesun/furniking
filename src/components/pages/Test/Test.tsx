import React from 'react';
import {withRouter} from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Test: React.FC = () => {
    const {} = useHistory()
    return (
        <>
          Test
        </>
    );
};

export default withRouter(Test);