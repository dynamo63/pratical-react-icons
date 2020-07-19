import React from 'react';
import { IconContext } from 'react-icons';
import { FaWhatsapp, FaReact } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';
import { AiFillHome } from 'react-icons/ai';
import TableRowItem from './TableRowItem';

function App() {
    return (
        <div>
            <h1 className="title has-text-centered mt-5">React icons Proposition</h1>
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Name of icons</th>
                                <th>Icons</th>
                            </tr>
                        </thead>
                        <tbody>
                            <IconContext.Provider value={{ size: '2rem' }}>
                                <TableRowItem name="WhatsApp" component={<FaWhatsapp color='green' />} />
                                <TableRowItem name="AlarmClock" component={<FcAlarmClock />} />
                                <TableRowItem name="Home" component={<AiFillHome />} />
                                <TableRowItem name="React" component={<FaReact color="blue" />} />
                            </IconContext.Provider>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default App;