import React from "react";
import "../SassComponent.scss";

const Main = () => {
  return ( 
        <div className={'div'}>
            <table className={'table'}>
                <tr>
                    <th className={'th'}>index</th>
                    <th className={'th'}>script</th>
                </tr>
                <tr>
                    <td className={'td_index'}>
                        <h3 className='header01'>Main Page</h3>
                    </td>
                    <td className={'td_main'}>
                        <img alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/LibreOffice%2BIBM%2BBIPM_logos.svg/220px-LibreOffice%2BIBM%2BBIPM_logos.svg.png' />
                        <h3 className='header01'>Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script Script </h3>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Main;