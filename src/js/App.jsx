import React from 'react';
import './../sass/main.scss';
import WebsiteTemplate from './WebsiteTemplate.jsx'

class App extends React.Component {

    render() {
        return (
            <WebsiteTemplate/>
        )
    }
}

module.exports = App;

// header={
//     <h1>by Dominik Palacz</h1>
// }
// content={
//     <div>
//         <p>Handluj na wirtualnej giełdzie BITCOINEM i zarabiaj na kolejne kursy w CodersLab</p>
//     </div>
// }
// menu={
//     <ul>
//         <li>LISTA LEWA</li>
//     </ul>
// }
// ad={
//     <ul>
//         <li>LISTA PRAWA</li>
//     </ul>
// }
// footer={
//     <p>&copy; 2018 Dominik Palacz</p>
// }