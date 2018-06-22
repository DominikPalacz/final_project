import React from 'react';
import './../sass/main.scss';
import WebsiteTemplate from './WebsiteTemplate.jsx'

class App extends React.Component {

    render() {
        return (
            <WebsiteTemplate />
        )
    }
}

module.exports = App;


//TODO Add Modal Dialogs in React
// //
// class ExampleApp extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             showModal: false
//         };
//
//         this.handleOpenModal = this.handleOpenModal.bind(this);
//         this.handleCloseModal = this.handleCloseModal.bind(this);
//     }
//
//     handleOpenModal() {
//         this.setState({showModal: true});
//     }
//
//     handleCloseModal() {
//         this.setState({showModal: false});
//     }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleOpenModal}>Trigger Modal</button>
//                 <ReactModal
//                     isOpen={this.state.showModal}
//                     contentLabel="Minimal Modal Example"
//                 >
//                     <button onClick={this.handleCloseModal}>Close Modal</button>
//                 </ReactModal>
//             </div>
//         );
//     }
// }

